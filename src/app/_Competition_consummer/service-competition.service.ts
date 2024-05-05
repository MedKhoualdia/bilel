import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Competition } from '../_model/Competition';
import { Observable } from 'rxjs';
import { DanceVenue } from '../_model/DanceVenue';


@Injectable({
  providedIn: 'root'
})
export class ServiceCompetitionService {

  constructor(private http:HttpClient) { }

  addCompetition(c: Competition):Observable<any> {
    return this.http.post('http://localhost:8088/CRUD/addCompetition', c)
  }
  getAllCompetitions() {
    return this.http.get<Competition[]>('http://localhost:8088/CRUD/allCompetitions')
  }
  deleteCompetition(id: number){
    return this.http.delete('http://localhost:8088/CRUD/deleteCompetition'+'/'+id)
    }

  getCompetitionById(id: number){
      return this.http.get<Competition>('http://localhost:8088/CRUD/getCompetitionById'+'/'+id)
    }
  getDanceVenueByCompetitionById(id: number){
    return this.http.get<DanceVenue>('http://localhost:8088/CRUD/getDanceVenueByCompetitionId'+'/'+id)
  }
  updateCompetition(c: Competition, id: number): Observable<any> {
    return this.http.put(`http://localhost:8088/CRUD/updateCompetition/${id}`, c, {
      responseType: 'text' // Set response type to 'text'
    });
  }

  affectCompetitionToADanceVenue(idCompetition: number, idDanceVenue: number) {
    return this.http.post(`http://localhost:8088/CRUD/assignCtoD/${idCompetition}/${idDanceVenue}`, {});
  }


  getAllDanceVenue(){
    return this.http.get<DanceVenue[]>('http://localhost:8088/CRUD/allDanceVenues')
  }

  getCompetitionByDanceVenue(id: number){
    return this.http.get<Competition[]>('http://localhost:8088/CRUD/CompetitionByDanceVenue'+'/'+id)
  }

}
