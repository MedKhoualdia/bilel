import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ForumpostService} from 'src/app/Services/forumpost.service';
import {Comment} from '../../models/Comment';
import {ForumPost} from '../../models/ForumPost';
import {ProfileService} from "../../services/profile.service";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-forumpost',
  templateUrl: './forumpost.component.html',
  styleUrls: ['./forumpost.component.scss']
})
export class ForumpostComponent {
listforum!:ForumPost[]
listcomment!:Comment[]
reacts!:any[]
listSousComment:any
selectedPostId!: number;
id:any

imageUrl:any
comment = {
  commentId:0,
  content: '',


};
  countLikes(reacts: any[]): number {
    return reacts.filter(react => react.liked).length;
  }

  isIdInList(targetId: any, objectList: any[]): boolean {
  return objectList.some(obj => obj.user.userId === targetId);
}

user:any
idUser : any=""
  constructor(private http: HttpClient,private service:ForumpostService,private router : Router,private profileService: ProfileService,){
    this.idUser = localStorage.getItem('idUser');
  }
ngOnInit():void{
  this.getallforum();
  this.getUserById()

}
imgselect(s : any ):  string {
  return "C:Users/ihebg/OneDrive/Bureau/projet_eya/demo/uploads/"+  s
}
  toggleEditMode(comment: any) {
    comment.editMode = !comment.editMode;
    if (comment.editMode) {
      comment.newContent = comment.content;
    }
  }
  cancelEdit(comment: any) {
    // Exit edit mode without saving changes
    comment.editMode = false;
  }
getUserById(){
  this.profileService.getUserProfile().subscribe(
    (profile: any) => {
      this.user = profile;
    },
    (error: any) => {
      console.error('Error fetching user profile:', error);
    }
  );
}
getallforum() {
  this.service.getall().subscribe(
    (forum: ForumPost[]) => {
      console.log(forum);
      this.listforum = forum;




    },
    (error) => {
      console.error('Error fetching forum:', error);
      if (error instanceof HttpErrorResponse) {
        console.error('Status:', error.status);
        console.error('Response body:', error.error);
      }
    }
  );
}
buttonAjouter(){
  this.router.navigate(['/DanceScape/ajouterPost'])
}
getallcomments(id:any) {
  this.service.getComments(id).subscribe(
    (comments: Comment[]) => {
      console.log(comments);
      this.listcomment = comments;
    },
    (error) => {
      console.error('Error fetching forum:', error);
      if (error instanceof HttpErrorResponse) {
        console.error('Status:', error.status);
        console.error('Response body:', error.error);
      }
    }
  );
}
react= {
  liked: true,
  dislike: false
}

likePost(id:any){
  this.service.PostLike(id,this.react).subscribe((r)=>{
    console.log( r.liked)

    this.getallforum()
    this.react.liked = r.liked ;
  this.react.dislike = r.dislike;})
}



dislikePost(id:any){
  this.service.PostdisLike(id,this.react).subscribe(()=>this.getallforum())
}
activeCommentInputIndex: number | null = null;

toggleCommentInput(index: number) {
  console.log(index)
  this.activeCommentInputIndex = this.activeCommentInputIndex === index ? null : index;

}

isCommentInputVisible(index: number): boolean {
  console.log(this.activeCommentInputIndex === index)
  return this.activeCommentInputIndex === index;
}
addComment(id:any){

  this.service.addComment(id,this.comment).subscribe( () => {
    this.comment = {
      commentId:0,
      content: "",


    };
    console.log('ddddddddddddddd')
    this.getallforum();
  })
  }
  addSousComment(id:any){
    this.service.addSousComment(id,this.souscomment).subscribe( () => {
      this.souscomment = {
        scommentId:0,
        content: "",

      };
      this.getallforum();
    })
    }
deletePost(id:any){
  this.service.deletePost(id).subscribe((res)=>{
  console.log(res)
  this.getallforum()})

}
deleteComment(commentId:any){
  this.service.deleteComment(commentId).subscribe((res)=>{
  console.log(res)
  this.getallforum()})

}
buttonUpdate(id:any){
  this.router.navigate(['/DanceScape/updatePost/'+id])
}
editingCommentId: number | null = null;
editedCommentContent = '';

startEditingComment(commentId: number, content: string): void {
  this.updateComment.commentId = commentId;
  this.updateComment.content = content;
}
souscomment={
  scommentId:0,
  content:''
}
updatesouscomment={
  scommentId:0,
  content:''
}
startEditingSousComment(scommentId: number, content: string):void{
  this.updatesouscomment.scommentId = scommentId;
  this.updatesouscomment.content = content;
}
updateComment={
  commentId:0,
  content: "",
}
saveEditedComment(): void {

  this.service.updateComment(this.updateComment).subscribe( () => {
    console.log(this.updateComment)

    this.getallforum();
  })

}
saveEditedSousComment(): void {

  this.service.updateSousComment(this.updatesouscomment).subscribe( () => {
    console.log(this.updatesouscomment)
    this.updatesouscomment = {
      scommentId:0,
      content: "",


    };
    this.getallforum();
  })

}
deleteSousComment(commentId:any){
  this.service.deleteSousComment(commentId).subscribe((res)=>{
  console.log(res)
  this.getallforum()})

}
mot:any
recherche (){
  this.service.recherche(this.mot).subscribe((r)=>{
    this.listforum=r;
  })


}
  async reclamation(postId: any): Promise<void> {
    const postElement = document.getElementById(postId);
    if (postElement) {
      const imageElements = postElement.querySelectorAll('img');
      if (imageElements.length > 1) {
        const secondImageElement = imageElements[1];

        try {
          const imageUrl = secondImageElement.src;
          const imageBlob = await this.http.get(imageUrl, { responseType: 'blob' }).toPromise();
          if (imageBlob) {
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onload = async () => {
              const base64Image = reader.result as string;
              secondImageElement.src = base64Image;
              secondImageElement.onload = async () => {
                const canvas = await html2canvas(postElement);
                const screenshotDataUrl = canvas.toDataURL();
                await this.router.navigate(['/DanceScape/reclamations/new'], {
                  queryParams: {screenshot: screenshotDataUrl}
                });
              };
            };

            reader.onerror = error => {
              console.error('Failed to convert image to base64:', error);
            };
          } else {
            console.error('Failed to fetch image: imageBlob is undefined.');
          }

        } catch (error) {
          console.error('Failed to fetch image or capture screenshot:', error);
        }
      } else {
        console.error('No second image found in the post');
      }
    } else {
      console.error(`Element with ID ${postId} not found`);
    }
  }
}
