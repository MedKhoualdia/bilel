import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { WebSocketService } from '../services/WebSocketService';
import { Message } from '../models/Message';
import { ProfileService } from '../services/profile.service';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ExchangedMessage } from '../models/ExchangedMessage';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/User.model';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';

// Define an enum for relationship statuses
export enum RelationshipStatus {
  NONE = 'NONE',
  BLOCKED = 'BLOCKED',
  PENDING = 'PENDING',
  ACCEPTED='ACCEPTED',
}


@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.scss']
})
export class PrivateChatComponent implements OnInit, AfterViewInit {
  @ViewChild('conversationArea') conversationArea: ElementRef | null = null;
  @Input() recipientUsername: string | undefined;
  relationshipStatus: RelationshipStatus = RelationshipStatus.NONE;
  isFriend: boolean = false;
  hasBlockedUser: boolean = false;
  isBlockedByUser: boolean = false;
  privateMessages: Message[] = [];
  newMessage: string | undefined;
  userProfile: any;
  userId: any;
  onlineUsers: string[] = [];
  selectedUser: string | undefined;
  exchangedMessage: ExchangedMessage[] = [];
  friends: User[] = [];
  friendsEmails: string[] = [];

  modalVisible = false;
  selectedMessage: Message | null = null;

  constructor(
    private http: HttpClient,
    private webSocketService: WebSocketService,
    private profileService: ProfileService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeSubscriptions();

    // Fetch user profile and initialize the component
    this.profileService.getUserProfile().subscribe(
      (profile: any) => {
        this.userProfile = profile;
        this.userId = this.userProfile?.email;
        this.recipientUsername = this.userId;

        // Fetch online users and initialize WebSocket connection
        this.fetchOnlineUsers();
        this.webSocketService.initializeWebSocketConnectionPrivate(this.userId);

        // Fetch friends' emails
        this.getFriendList().subscribe(
          (emails: string[]) => {
            this.friendsEmails = emails;
          },
          error => {
            console.error('Error fetching friends\' emails:', error);
          }
        );
      },
      error => {
        console.error('Error fetching user profile:', error);
      }
    );
  }

  ngAfterViewInit(): void {
    if (!this.conversationArea) {
      console.error('conversationArea is not defined');
    }
  }

  initializeSubscriptions(): void {
    // Subscribe to messages from the server
    this.webSocketService.getMessageSubject().subscribe((message: Message) => {
      this.handleIncomingMessage(message);
    });
  }
  handleServerResponse(response: any): void {
    // Parse the server response
    const serverResponse = JSON.parse(response.body);
    if (serverResponse && serverResponse.temporaryId && serverResponse.id) {
      const temporaryId = serverResponse.temporaryId;
      const actualId = serverResponse.id;

      // Update the actual ID of the corresponding sent message
      this.updateMessageId(temporaryId, actualId);
    }
  }

  updateMessageId(temporaryId: number, actualId: number): void {
    // Find the message with the temporary ID and update its actual ID
    const messageIndex = this.privateMessages.findIndex(msg => msg.id === temporaryId);
    if (messageIndex !== -1) {
      this.privateMessages[messageIndex].id = actualId;
    }
  }
  handleIncomingMessage(message: Message): void {
    // Handle incoming messages
    if (message.senderName === this.recipientUsername || message.receiverName === this.recipientUsername) {
      this.privateMessages.push(message);
    }
  }

  sendMessage(): void {
    if (!this.selectedUser || !this.newMessage) {
      console.error('Please select a user and enter a message.');
      return;
    }

    // Check relationship status
    this.http.get<boolean>(`http://localhost:8088/relationships/can-send-message/${this.userProfile?.id}/${this.selectedUser}`).subscribe(
      canSend => {
        if (!canSend) {
          this.toastr.error('', 'Cannot send messages to this user. Friend request must be accepted first!');
          return;
        }

        // Create the message with a temporary ID
        const temporaryId = this.generateTemporaryId();
        const message: Message = {
          id: temporaryId,
          senderName: this.userProfile?.email || '',
          receiverName: this.selectedUser || '',
          date: new Date().toISOString(),
          status: 'Join',
          message: this.newMessage || ''
        };

        // Add the message to the component state
        this.privateMessages.push(message);

        // Send the private message
        this.webSocketService.sendPrivateMessage(message, message.receiverName, (actualId: number) => {
          // Update the message ID in the local state with the actual ID from the server
          const messageToUpdate = this.privateMessages.find(msg => msg.id === temporaryId);
          if (messageToUpdate) {
            messageToUpdate.id = actualId;
          }
        });

        // Clear the new message input
        this.newMessage = '';
      },
      error => {
        console.error('Error checking relationship status:', error);
      }
    );
  }



  // Generate a temporary ID for a message
  generateTemporaryId(): number {
    return Math.floor(Math.random() * 1000000);
  }

  fetchOnlineUsers(): void {
    if (!this.userId) {
      console.error('User profile not loaded.');
      return;
    }

    this.profileService.getOnlineUsers().subscribe(
      (users: string[]) => {
        this.onlineUsers = users.filter(user => user !== this.userId);
      },
      error => {
        console.error('Error fetching online users:', error);
      }
    );
  }

  selectUser(user: string): void {
    this.selectedUser = user;
    this.checkRelationshipStatus(user);
    this.getExchangedMessages().subscribe(messages => {
      this.exchangedMessage = messages.map(message => ({
        ...message,
        sender: { email: message.sender.email },
        receiver: { email: message.receiver.email },
        sentTime: message.sentTime,
        content: message.content,
        status: message.status
      }));
    });
  }

  getExchangedMessages(): Observable<ExchangedMessage[]> {
    return this.http.get<ExchangedMessage[]>(`http://localhost:8088/ExchangedMessages/exchanged/${this.userProfile?.email}/${this.selectedUser}`);
  }

  displayMessages(): Message[] {
    const convertedExchangedMessages = this.exchangedMessage.map(this.convertExchangedMessageToMessage);
    const combinedMessages = [...this.privateMessages, ...convertedExchangedMessages];
    combinedMessages.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return combinedMessages;
  }

  convertExchangedMessageToMessage(exchangedMessage: ExchangedMessage): Message {
    return {
      id: exchangedMessage.id,
      senderName: exchangedMessage.sender.email,
      receiverName: exchangedMessage.receiver.email,
      date: exchangedMessage.sentTime,
      message: exchangedMessage.content,
      status: exchangedMessage.status
    };
  }

  async reportMessage(msg: Message | null): Promise<void> {
    if (this.conversationArea) {
      try {
        const canvas = await html2canvas(this.conversationArea.nativeElement);
        const imgDataUrl = canvas.toDataURL();

        await this.router.navigate(['/DanceScape/reclamations/new'], {
          queryParams: { screenshot: imgDataUrl }
        });
      } catch (error) {
        console.error('Failed to capture screenshot:', error);
      }
    } else {
      console.error('conversationArea is not defined');
    }
  }

  deleteMessage(msg: Message | null): void {
    if (msg) {
      this.http.put(`http://localhost:8088/ExchangedMessages/delete/${msg.id}`,null).subscribe(
        () => {
          // Successfully deleted the message
          console.log('Message deleted successfully');
          this.toastr.success('Message deleted successfully');

          // Remove the message from privateMessages
          const messageToUpdate = this.privateMessages.find(m => m.id === msg.id);
          if (messageToUpdate) {
            messageToUpdate.message = 'This message has been deleted';
          }
          this.closeModal()
        },
        error => {
          // Handle deletion error
          console.error('Error deleting message:', error);
          this.toastr.error('Error deleting message');
        }
      );
    }
  }

  sendFriendRequest(userToSendRequest: string): void {
    this.http.post(`http://localhost:8088/relationships/friend-request/${this.userProfile?.id}/${userToSendRequest}`, null).subscribe(
      () => {
        console.log('Friend request sent successfully');
        this.toastr.success('', 'Friend request sent successfully!');
      },
      error => {
        this.toastr.error('', 'Friend request already sent!');
        console.error('Error sending friend request:', error);
      }
    );
  }

  openModal(msg: Message): void {
    this.selectedMessage = msg;
    this.modalVisible = true;
  }

  closeModal(): void {
    this.modalVisible = false;
    this.selectedMessage = null;
  }

  getFriendList(): Observable<string[]> {
    return this.http.get<User[]>(`http://localhost:8088/ExchangedMessages/friends/${this.userProfile.id}`).pipe(
      map((friends: User[]) => {
        return friends.map(friend => friend.email);
      })
    );
  }

  blockUser(user: string): void {
    // Send a request to the backend to block the user
    this.http.post(`http://localhost:8088/relationships/block/${this.userProfile?.id}/${user}`, null)
      .subscribe(
        () => {
          // Successfully blocked the user
          console.log(`User ${user} blocked successfully`);
          this.toastr.success(`User ${user} blocked successfully`);
          this.checkRelationshipStatus(user);
        },
        error => {
          // Handle errors, such as if the request fails
          console.error(`Error blocking user ${user}:`, error);
          this.toastr.error(`Error blocking user ${user}`);
        }
      );
  }
  checkRelationshipStatus(user: string): void {
    // Send a request to the backend to check the relationship status
    this.http.get<string>(`http://localhost:8088/relationships/status/${this.userProfile?.id}/${user}`)
      .subscribe(
        (relationshipStatus: string) => {
          // Update the state variable based on the backend response
          if (relationshipStatus === 'ACCEPTED') {
            // Handle accepted status
            console.log(`Relationship with user ${user} is ACCEPTED.`);
            this.isBlockedByUser = false;
          } else if (relationshipStatus === 'BLOCKED') {
            // Handle blocked status
            console.log(`User ${user} is BLOCKED.`);
            this.isBlockedByUser = true;
          } else {
            // Handle none status
            console.log(`No relationship status with user ${user}.`);
            this.isFriend = false;
          }
        },
        error => {
          console.error(`Error checking relationship status with user ${user}:`, error);
        }
      );
  }





  unblockUser(user: string): void {
    // Send a request to the backend to unblock the user
    this.http.post(`http://localhost:8088/relationships/unblock/${this.userProfile?.id}/${user}`, null)
      .subscribe(
        () => {
          // Successfully unblocked the user
          console.log(`User ${user} unblocked successfully`);
          this.toastr.success(`User ${user} unblocked successfully`);
          this.checkRelationshipStatus(user);

        },
        error => {
          console.error(`Error unblocking user ${user}:`, error);

          if (error.status === 404) {
            this.toastr.error(`User ${user} not found`);
          } else if (error.status === 403) {
            this.toastr.error(`You do not have permission to unblock user ${user}`);
          } else {
            this.toastr.error(`Error unblocking user ${user}`);
          }
        }
      );
  }


}

