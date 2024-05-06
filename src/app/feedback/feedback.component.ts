import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluationSerivceService } from '../services/evaluation-serivce.service';
import { AvisScore } from '../models/AvisScore';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  constructor(private Router: Router,private route: ActivatedRoute,private formBuilder: FormBuilder,private service:EvaluationSerivceService) {}
  idUser!:number;
  idScore!:number;
  ideval!:number;
  errrorr:string='';
  FeedFormGroup!: FormGroup;
  ngOnInit() {
    this.route.params.subscribe(params => {
     this.ideval= +params['id1'];
     this.idUser = +params['id2'];
     this.idScore= +params['id3'];
     this.initializeForm();
    });
  }
  initializeForm(): void {
    this.FeedFormGroup = this.formBuilder.group({
      likee: ['', Validators.required],
      rate: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  onAdd(){
    if(this.FeedFormGroup.valid){
      let a=new AvisScore();
      a.description=this.FeedFormGroup.get('description')!.value;
      a.rate=this.FeedFormGroup.get('rate')!.value;
      a.likee=this.FeedFormGroup.get('likee')!.value;
      this.service.AvisScore(a,this.idScore,this.ideval).subscribe({
        next: data => {
         this.Router.navigate(['/DanceScape/score']);
        },
        error: err => {
        this.errrorr=err;
        }
      });
    }
    else{
      this.errrorr='All fields are required!';
    }
  }
  setRate(rate: number) {
    this.FeedFormGroup.get('rate')!.setValue(rate);
  }
  onLikeChange(event: any) {
    const value = event.target.value;
    const likeeControl = this.FeedFormGroup.get('likee');

    if (value === 'yes') {
      likeeControl!.setValue('You liked the evaluation');
    } else if (value === 'no') {
      likeeControl!.setValue('You didn\'t like the evaluation');
    }
  }

}
