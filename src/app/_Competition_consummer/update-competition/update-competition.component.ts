import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceCompetitionService } from '../service-competition.service';
import { Competition } from 'src/app/_model/Competition';

function dateRangeValidator(control: FormControl): { [key: string]: boolean } | null {
  const currentDate = new Date();
  const selectedDate = new Date(control.value);

  // Compare dates
  if (selectedDate < currentDate) {
    return { 'date_range': true }; // Validation failed
  }
  return null; // Validation passed
}

@Component({
  selector: 'app-update-competition',
  templateUrl: './update-competition.component.html',
  styleUrls: ['./update-competition.component.scss']
})
export class UpdateCompetitionComponent {
  c!:Competition
  id!:number
  constructor(private consP: ServiceCompetitionService, private router:Router, private act:ActivatedRoute){}
  registerForm = new FormGroup ({
    name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    date:new FormControl('',[Validators.required,dateRangeValidator]),
    rules:new FormControl('',[Validators.required,Validators.minLength(5)]),
  })
  successMessage:string=''
  errorMessage:string=''
  isSubmitting:boolean=false

  ngOnInit(){
    //1- recuperer l'id depuis l'url
    this.id=this.act.snapshot.params['id']
    //2- recuperer le produit de l'id deja recuperer
    this.consP.getCompetitionById(this.id).subscribe(
      (data)=>{
        this.c=data
        this.registerForm.patchValue(this.c as any)
      }
    )
  }

  save() {
    this.consP.updateCompetition(this.registerForm.value as any, this.id).subscribe(
      () => {
        this.successMessage = 'Competition updated successfully';

        // Wait for a minute before navigating
        setTimeout(() => {
          this.router.navigateByUrl('/admin/listCompetition');
        }, 3000);
      },
      (error) => {
        // Handle error
        console.error('Error updating competition:', error);
        this.errorMessage = 'Error updating competition. Please try again.';
      }
    );
  }
}
