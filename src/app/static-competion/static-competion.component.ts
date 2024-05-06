import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { EvaluationSerivceService } from '../services/evaluation-serivce.service';
import { ToastrService } from 'ngx-toastr';
import { Competition } from '../_model/Competition';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-static-competion',
  templateUrl: './static-competion.component.html',
  styleUrls: ['./static-competion.component.scss']
})
export class StaticCompetionComponent {

  constructor(private service: EvaluationSerivceService,private toastr: ToastrService,private dialogRef : MatDialog) {
  }
  Competitions!: Competition[];
  message: string = '';
  @ViewChild('secondDialog', {static: true}) secondDialog!: TemplateRef<any>;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  idd!:number;


  ngOnInit(): void {
    this.service.getAllCompetition().subscribe(data => {
      // ts-@ignore
      this.Competitions = data;

    });
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
    this.service.importExcel( this.idd, "Judge", "Judge", file).subscribe(
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
