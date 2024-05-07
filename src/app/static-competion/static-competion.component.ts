import { Observable } from 'rxjs';
import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { EvaluationSerivceService } from '../services/evaluation-serivce.service';
import { ToastrService } from 'ngx-toastr';
import { Competition } from '../_model/Competition';
import {MatDialog} from '@angular/material/dialog';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-static-competion',
  templateUrl: './static-competion.component.html',
  styleUrls: ['./static-competion.component.scss']
})
export class StaticCompetionComponent {

  constructor(private act: ActivatedRoute, private service: EvaluationSerivceService,private toastr: ToastrService,private dialogRef : MatDialog, private userService : UserService) {
  }
  id:any;
  users!: User[];
  Competitions!: Competition[];
  message: string = '';
  @ViewChild('secondDialog', {static: true}) secondDialog!: TemplateRef<any>;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  idd!:number;


  ngOnInit(): void {
    this.service.getAllCompetition().subscribe(data => {
      // ts-@ignore
      this.Competitions = data;
      this.id=this.act.snapshot.params['id'];


    });

    this.userService.getByCompetitionId(this.id).subscribe(data => {
      this.users = data;
    })
  }

  downloadExcel(c: Competition) {
    this.service.downloadExcel(c).subscribe(

      (response) => {
        console.log(response)
        const blob = new Blob([response], { type: 'application/octet-stream' });
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = 'Competition.xls';
        downloadLink.click();
        this.message = 'Excel file downloaded successfully!';
        this.dialogRef.open(this.secondDialog);
      setTimeout(() => {
        this.dialogRef.closeAll();
      }, 3000);
      return;
    },
      (error: any) => {
        console.log(error.error.text);
      }
    );
  }

  importExcel(c: Competition) {
    this.idd=c.competitionId;
    this.fileInput.nativeElement.click();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.service.importExcel( this.idd, "admin", "admin", file).subscribe(
      (response: any) => {
        this.message = 'Excel file imported successfully!';
        this.dialogRef.open(this.secondDialog);
      setTimeout(() => {
        this.dialogRef.closeAll();
      }, 3000);
      return;

      },
      (error: any) => {
        console.error('Erreur lors de l\'importation du fichier Excel : ', error);
      }
    );
  }

}
