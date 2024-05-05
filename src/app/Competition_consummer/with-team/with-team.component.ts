import { Component } from '@angular/core';
import { ServiceFrontService } from '../service-front.service';
import { FormGroup, Validator, FormControl, Validators } from '@angular/forms';
import { ServiceCompetitionService } from 'src/app/_Competition_consummer/service-competition.service';
import { Competition } from 'src/app/_model/Competition';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-with-team',
  templateUrl: './with-team.component.html',
  styleUrls: ['./with-team.component.scss']
})
export class WithTeamComponent {
  competition: Competition = new Competition(); // Assuming you have a way to retrieve the competition object

  constructor(private competitionService: ServiceCompetitionService, private router:Router) {}

  registerForm = new FormGroup({
    teamNumber: new FormControl('', [Validators.required, Validators.min(0)]),
    teamsName: new FormControl('', [Validators.required]),
  });

  successMessage: string = '';
  errorMessage: string = '';
  isSubmitting: boolean = false;
  joiningTypeButtonDisabled: boolean = false;


  save() {
    this.joiningTypeButtonDisabled = true;
    if (this.isSubmitting) {
      return;
    }
    console.log('saving team information', this.registerForm.value);
    this.isSubmitting = true;
  
    // Retrieve form values
    const teamNumberControl = this.registerForm.get('teamNumber');
    const teamsNameControl = this.registerForm.get('teamsName');
  
    // Check if form values exist and convert them to the appropriate types
    const teamNumber = teamNumberControl?.value ? Number(teamNumberControl.value) : undefined;
    const teamsName = teamsNameControl?.value ? (teamsNameControl.value as string) : undefined;
  
    // Assign converted values to the competition object
    if (teamNumber !== undefined) {
      this.competition.teamNumber = teamNumber;
    }
    if (teamsName !== undefined) {
      this.competition.teamsName = teamsName;
    }
    
    this.competitionService.addCompetition(this.competition).subscribe(
      () => {
        console.log('information added successfully');
        this.successMessage = 'Team Information Added Successfully!';
        this.errorMessage = '';
        this.registerForm.reset();
        this.joiningTypeButtonDisabled = false;

      },
      (error) => {
        console.log('failed to add information', error);
        this.errorMessage = 'Error Adding Team Information!. Please try again';
        this.successMessage = '';
        this.joiningTypeButtonDisabled = false;

      }
    ).add(() => {
      this.isSubmitting = false;
    });
  }
}  
