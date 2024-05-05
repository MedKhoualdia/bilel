import { ServiceDanceVenueService } from './../../_DanceVenue_consummer/service-dance-venue.service';
import { Component } from '@angular/core';
import { Competition } from 'src/app/_model/Competition';
import { ServiceCompetitionService } from '../service-competition.service';
import { DatePipe } from '@angular/common';
import { DanceVenue } from 'src/app/_model/DanceVenue';
import { ActivatedRoute, Router } from '@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list-competition',
  templateUrl: './list-competition.component.html',
  styleUrls: ['./list-competition.component.scss']
})
export class ListCompetitionComponent {
  listCompetition: Competition[]=[]
  selectedCompetition: Competition | undefined;
  danceVenueId: string | null = null; // Initialize with null
  filteredDanceVenues: DanceVenue[]=[];
  selectedDanceVenue: any;

  constructor(private consP: ServiceCompetitionService, private datePipe: DatePipe, private router:ActivatedRoute,private toastr: ToastrService){}

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const danceVenueId = params['danceVenueId'];
      if (danceVenueId) {
        this.consP.getCompetitionByDanceVenue(danceVenueId).subscribe({
          next: (data) => this.listCompetition = data,
          error: (error) => console.log(error),
          complete: () => console.log('done')
        });
      }
    });
    this.consP.getAllCompetitions().subscribe({
      next: (data) => this.listCompetition = data,
      error: (error) => console.log(error),
      complete: () => console.log('done')
    });

    this.consP.getAllDanceVenue().subscribe(danceVenues => {
      this.filteredDanceVenues = danceVenues.filter(venue => venue.competition === null);
      console.log(this.filteredDanceVenues);
      this.initializeCompetitions();
    });

  }

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }

  supp(id: number) {
    this.consP.deleteCompetition(id).subscribe(
      () => this.ngOnInit(),
      (error) => console.error('Error deleting competition:', error)
    );
  }
  initializeCompetitions() {
    this.listCompetition.forEach(competition => {
      competition.selectedDanceVenue = null;
    });
  }
  allocateCompetition(competition: Competition): void {
    this.selectedCompetition = competition;
    console.log(this.selectedCompetition.selectedDanceVenue)
    console.log(competition.competitionId)
    this.consP.getAllDanceVenue().subscribe({

      next: (danceVenues: DanceVenue[]) => {
        if (danceVenues.length > 0) {
          this.consP.affectCompetitionToADanceVenue(competition.competitionId, competition.selectedDanceVenue.danceVenueId).subscribe({
            next: () => {
              console.log('Competition affected to dance venue successfully');
              this.consP.getAllCompetitions().subscribe({
                next: (data) => this.listCompetition = data,
                error: (error) => console.log(error),
                complete: () => console.log('done')
              });
              this.toastr.success('Competition affected to dance venue successfully.');

            },
            error: (error) => {
              console.error('Error affecting competition to dance venue:', error);
              alert('Error affecting competition to dance venue. Please try again later.');
            }
          });
        } else {
          console.error('No dance venues available.');
          // Display an error message to the user
          alert('No dance venues available.');
        }
      },
      error: (error) => {
        console.error('Error fetching dance venues:', error);
        // Display an error message to the user
        alert('Error fetching dance venues. Please try again later.');
      }
    });
  }

}

