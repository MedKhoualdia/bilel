import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServiceCompetitionService} from 'src/app/_Competition_consummer/service-competition.service';
import {Competition} from 'src/app/_model/Competition';
import {HttpClient} from '@angular/common/http';
import * as L from 'leaflet';
import {OpenStreetMapProvider, SearchControl} from 'leaflet-geosearch';
import {async, Observable, Subscriber} from "rxjs";
import 'leaflet-routing-machine';
import {DomUtil} from "leaflet";
import getPosition = DomUtil.getPosition;
import {DanceVenue} from "../../_model/DanceVenue";

@Component({
  selector: 'app-detail-competition-front',
  templateUrl: './detail-competition-front.component.html',
  styleUrls: ['./detail-competition-front.component.scss'],
})
export class DetailCompetitionFrontComponent implements OnInit {
  c!: Competition;
  id!: number;
  targetLanguage!: string;
  title = 'ng-google-translate';
  map: any;// Layer to contain search results (markers)
  danceVenue! : DanceVenue;
  constructor(
    private act: ActivatedRoute,
    private consP: ServiceCompetitionService,
    private Http: HttpClient
  ) {}

  ngOnInit(): void {
      this.id = this.act.snapshot.params['id'];
      localStorage.setItem('competitionId', String(this.id));
      this.consP.getCompetitionById(this.id).subscribe((data) => (this.c = data));
    this.consP.getDanceVenueByCompetitionById(this.id).subscribe((data: any) => {
      this.danceVenue = data;
      this.loadMap();
    });
  }
  public ngAfterViewInit(): void {
    console.log(this.danceVenue)

  }



  private loadMap(): void {


    this.map = L.map('map').setView([this.danceVenue?.location?.y ?? 0, this.danceVenue?.location?.x ?? 0], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
    }).addTo(this.map);


        const icon = L.icon({
          iconUrl: 'https://pixsector.com/cache/c95a2c53/ava8daf1a198802ad3efa.png',
          iconSize: [100, 100],
          popupAnchor: [13, 0],
        });
        if (this.danceVenue.location) {
          const marker = L.marker([this.danceVenue.location.y, this.danceVenue.location.x], {icon}).bindPopup('My Position');
          marker.addTo(this.map);
        }

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
    this.map.on('geosearch/showlocation', function (result: any) {
      console.log(result.location)
    })



  }


  translate() {

  }
}
