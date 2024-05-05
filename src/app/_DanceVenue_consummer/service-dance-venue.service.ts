import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DanceVenue } from '../_model/DanceVenue';

@Injectable({
  providedIn: 'root'
})
export class ServiceDanceVenueService {

  constructor(private http:HttpClient) { }

  addDanceVenue(d:DanceVenue,location:any){
    d.location = location
    return this.http.post('http://localhost:8088/CRUD/addDanceVenue',d)
  }

  getAllDanceVenue(){
    return this.http.get<DanceVenue[]>('http://localhost:8088/CRUD/allDanceVenues')
  }

  getDanceVenueById(id:number){
    return this.http.get<DanceVenue>('http://localhost:8088/CRUD/getDanceVenueById'+'/'+id)
  }

  deleteDanceVenue(id:number){
    return this.http.delete('http://localhost:8088/CRUD/deleteDanceVenueById'+'/'+id)
  }

  updateDanceVenue(d:DanceVenue,id:number){
    return this.http.put('http://localhost:8088/CRUD/updateDanceVenue'+'/'+id, d,{
      responseType: 'text'
    });
  }
}
