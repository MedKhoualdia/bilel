import { Router } from '@angular/router';
import { Component, AfterViewInit } from '@angular/core';
import { ServiceDanceVenueService } from '../service-dance-venue.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {async} from "rxjs";
import * as L from 'leaflet';
import {OpenStreetMapProvider, SearchControl} from 'leaflet-geosearch';
import {Observable, Subscriber} from "rxjs";
import 'leaflet-routing-machine';
import {DomUtil} from "leaflet";



@Component({
  selector: 'app-add-dance-venue',
  templateUrl: './add-dance-venue.component.html',
  styleUrls: ['./add-dance-venue.component.scss']
})
export class AddDanceVenueComponent  {
  private map!: any;
  departureAddress: string = '';
   locations: { x: any; y: any; label: any; } | undefined;
  constructor(private consP: ServiceDanceVenueService, private router: Router) {}

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    className: new FormControl('', [Validators.required]),
    numberOfSeat: new FormControl('', [Validators.required]),
    departureAddress:new FormControl('', [Validators.required]),
  });

  successMessage: string = '';
  errorMessage: string = '';
  isSubmitting: boolean = false;
  public ngAfterViewInit(): void {
    this.loadMap();
  }
  save() {
    if (this.isSubmitting) {
      return;
    }

    console.log('Saving Dance Venue:', this.registerForm.value);
    this.isSubmitting = true;

    this.consP.addDanceVenue(this.registerForm.value as any,this.locations).subscribe(
      () => {
        console.log('Dance Venue added successfully');
        this.successMessage = 'Dance Venue added successfully!';
        this.errorMessage = '';
        this.registerForm.reset();
        setTimeout(() => {
          this.router.navigateByUrl('/admin/listDanceVenue');
        }, 2000);
      },
      (error) => {
        console.error('Error adding Dance Venue', error);
        this.successMessage = '';
        this.errorMessage = 'Error adding Dance Venue: ' + error.message; // or any other property you expect from the error response
      }
    ).add(() => {
      this.isSubmitting = false;
    });
  }
  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  private loadMap(): void {
    this.map = L.map('map').setView([0, 0], 1);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
    }).addTo(this.map);

    this.getCurrentPosition()
      .subscribe((position: any) => {
        this.map.flyTo([position.latitude, position.longitude], 13);

        const icon = L.icon({
          iconUrl: 'https://pixsector.com/cache/c95a2c53/ava8daf1a198802ad3efa.png',
          iconSize: [50, 50],
          popupAnchor: [13, 0],
        });

        const marker = L.marker([position.latitude, position.longitude], { icon }).bindPopup('My Position');
        marker.addTo(this.map);
      });
    const searchMarkerIcon = L.icon({
      iconUrl: 'https://pixsector.com/cache/c95a2c53/ava8daf1a198802ad3efa.png',
      iconSize: [50, 50],
      popupAnchor: [13, 0],
    });
    const provider = new OpenStreetMapProvider();

    const searchControl = SearchControl({
      provider: provider,
      style: 'bar',
      marker: {
        icon: searchMarkerIcon,
        draggable: true,
      },
      searchLabel: 'Enter address ... ',
      countrycodes: 'tn'


    });

    this.map.addControl(searchControl);



    this.map.on('geosearch/showlocation', (result: any) => {
      this.locations  = result.location;
      console.log(this.locations?.x)
      console.log(this.locations?.y)
      this.departureAddress = result.location.label

    })
  }



}
