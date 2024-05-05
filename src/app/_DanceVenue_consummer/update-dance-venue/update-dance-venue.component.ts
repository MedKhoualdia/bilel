import { Component } from '@angular/core';
import { ServiceDanceVenueService } from '../service-dance-venue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DanceVenue } from 'src/app/_model/DanceVenue';

@Component({
  selector: 'app-update-dance-venue',
  templateUrl: './update-dance-venue.component.html',
  styleUrls: ['./update-dance-venue.component.scss']
})
export class UpdateDanceVenueComponent {
  c!:DanceVenue
  id!:number
  constructor(private consP:ServiceDanceVenueService, private router:Router, private act:ActivatedRoute) {}
  registerForm = new FormGroup ({
    name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    numberOfSeat:new FormControl('',[Validators.required]),
  })
  successMessage:string=''
  errorMessage:string=''
  isSubmitting:boolean=false

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.id=this.act.snapshot.params['id']
    this.consP.getDanceVenueById(this.id).subscribe(
      (data)=>{
        this.c=data
        this.registerForm.patchValue(this.c as any)
      }
    )
  }

  save(){
    this.consP.updateDanceVenue(this.registerForm.value as any, this.id).subscribe(
      ()=>{
        this.successMessage= 'Dance Venue added successfully'
        setTimeout(()=>{
          this.router.navigateByUrl('admin/listDanceVenue')
        }, 3000)
      },
      (error)=>{
        console.error('error updating dance venue', error)
        this.errorMessage='Error updating this dance Venue, Please try again'
      }
    )

  }
}
