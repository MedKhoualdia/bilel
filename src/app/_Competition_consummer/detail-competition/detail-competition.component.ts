import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competition } from 'src/app/_model/Competition';
import { ServiceCompetitionService } from '../service-competition.service';

@Component({
  selector: 'app-detail-competition',
  templateUrl: './detail-competition.component.html',
  styleUrls: ['./detail-competition.component.scss']
})
export class DetailCompetitionComponent {
id!:number
c!:Competition

constructor(private act: ActivatedRoute, private consP:ServiceCompetitionService){}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.id=this.act.snapshot.params['id'];
  this.consP.getCompetitionById(this.id).subscribe(
    (data)=>this.c=data
  )
}
}
