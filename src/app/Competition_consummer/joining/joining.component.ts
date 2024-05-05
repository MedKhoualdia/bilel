import { Component } from '@angular/core';
import { ServiceFrontService } from '../service-front.service';
import { Competition } from 'src/app/_model/Competition';
import { User } from 'src/app/_model/User';

@Component({
  selector: 'app-joining',
  templateUrl: './joining.component.html',
  styleUrls: ['./joining.component.scss']
})
export class JoiningComponent {

  c: Competition = new Competition(); // Initialize Competition object
  participant: User = new User(); // Initialize User object
  participantJoined: boolean = false;
  joinErrorMessage: string = '';

  constructor(private service: ServiceFrontService) {}

  save(event: Event) {
    event.preventDefault();
    this.service.joinCompetition(this.c, this.participant).subscribe(
      response => {
        console.log('Participant joined the competition successfully');
        this.participantJoined = true;
        this.joinErrorMessage = '';
      },
      error => {
        console.error("Error joining the competition", error);
        this.joinErrorMessage = "Error joining the competition";
        this.participantJoined = false;
      }
    );
  }
}
