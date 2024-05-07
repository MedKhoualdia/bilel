import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Danceschool } from '../_model/danceschool';


@Injectable({
  providedIn: 'root'
})
export class DanceschoolService {
  private danceSchoolUrl = 'http://localhost:8088/api/dance-schools';

  constructor(private http: HttpClient) { }

  getDanceSchools(): Observable<Danceschool[]> {
    return this.http.get<Danceschool[]>(this.danceSchoolUrl);
  }

  addDanceSchool(danceSchool: Danceschool): Observable<Danceschool> {
    return this.http.post<Danceschool>(this.danceSchoolUrl, danceSchool);
  }

  deleteDanceSchoolById(id: number): Observable<void> {
    const deleteUrl = `${this.danceSchoolUrl}/${id}`;
    return this.http.delete<void>(deleteUrl);
  }


  getDanceSchoolById(id: number): Observable<Danceschool> {
    const getUrl = `${this.danceSchoolUrl}/${id}`;
    return this.http.get<Danceschool>(getUrl);
  }
}
