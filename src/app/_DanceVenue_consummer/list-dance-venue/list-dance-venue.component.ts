import { Component } from '@angular/core';
import { DanceVenue } from 'src/app/_model/DanceVenue';
import { ServiceDanceVenueService } from '../service-dance-venue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-dance-venue',
  templateUrl: './list-dance-venue.component.html',
  styleUrls: ['./list-dance-venue.component.scss']
})
export class ListDanceVenueComponent {
  ListDanceVenue!:DanceVenue[]
  constructor(private consP:ServiceDanceVenueService, private router:ActivatedRoute) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.consP.getAllDanceVenue().subscribe({
      next:(data)=>this.ListDanceVenue=data,
      error:(error)=>console.log(error),
      complete:()=>console.log("done")
    })
    
  }
  supp(id: number) {
    this.consP.deleteDanceVenue(id).subscribe(
      (response) => {
        // Check if the response is a string
        if (typeof response === 'string') {
          // Parse the string to extract the relevant information
          const message = response;
          console.log(message); // Log the message
        } else {
          // Handle the response as usual
          console.log(response); // Log the parsed JSON response
          // Update the list of dance venues
          this.ListDanceVenue = this.ListDanceVenue.filter(venue => venue.danceVenueId !== id);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
 
}
