import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DanceVenue } from 'src/app/_model/DanceVenue';
import { ServiceDanceVenueService } from '../service-dance-venue.service';

@Component({
  selector: 'app-detail-dance-venue',
  templateUrl: './detail-dance-venue.component.html',
  styleUrls: ['./detail-dance-venue.component.scss']
})
export class DetailDanceVenueComponent {
  id!:number
  c!:DanceVenue

  constructor(private act: ActivatedRoute, private consP: ServiceDanceVenueService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.id=this.act.snapshot.params['id']
    this.consP.getDanceVenueById(this.id).subscribe(
      (data)=>this.c=data
    )
  }

}
