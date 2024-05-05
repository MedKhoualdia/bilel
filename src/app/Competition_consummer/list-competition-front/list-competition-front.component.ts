import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceCompetitionService } from 'src/app/_Competition_consummer/service-competition.service';
import { Competition } from 'src/app/_model/Competition';

@Component({
  selector: 'app-list-competition-front',
  templateUrl: './list-competition-front.component.html',
  styleUrls: ['./list-competition-front.component.scss']
})
export class ListCompetitionFrontComponent {
  c!:Competition
  listCompetition: Competition[]=[]
  p:number=1
  itemsPerPage:number=6
  totalCompetition: any
  constructor(private consP:ServiceCompetitionService, private datePipe: DatePipe){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.consP.getAllCompetitions().subscribe({
      next:(data)=>{
        this.listCompetition=data,
        this.totalCompetition=data.length
      },
      error:(error)=>console.log(error),
      complete:()=>console.log('done'),
    
    })
  }
  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }

}
