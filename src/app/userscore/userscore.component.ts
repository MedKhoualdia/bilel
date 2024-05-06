import { Component, TemplateRef, ViewChild } from '@angular/core';
import { EvaluationSerivceService } from '../services/evaluation-serivce.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../_model/User';

@Component({
  selector: 'app-userscore',
  templateUrl: './userscore.component.html',
  styleUrls: ['./userscore.component.scss']
})
export class UserscoreComponent {

  constructor(private service: EvaluationSerivceService,private router: Router,private dialogRef : MatDialog) { }
  message: string = '';
  @ViewChild('secondDialog', {static: true}) secondDialog!: TemplateRef<any>;
  u = new User();
  data: any;
  ngOnInit(): void {
    // ts-@ignore
    this.u.userId = 3;
    this.service.getAllEvaluations().subscribe(data => {
      // ts-@ignore
      this.data = data;
      console.log(this.data)

    });
  }
  feedback(id:number,ids:number){
    let url=`http://localhost:4200/DanceScape/feedback/${id}/${this.u.userId}/${ids}`;
    this.service.Sendemail(ids,url).subscribe(

      (response) => {
        this.message = 'Please check your email to add the feedback!';
        this.dialogRef.open(this.secondDialog);
      setTimeout(() => {
        this.dialogRef.closeAll();
      }, 3000);
      return;
    },
      (error: any) => {
        console.log(error.error.text);
        this.message = 'Please check your email to add the feedback!';
        this.dialogRef.open(this.secondDialog);
      setTimeout(() => {
        this.dialogRef.closeAll();
      }, 3000);
      return;
      }
    );
  }

}
