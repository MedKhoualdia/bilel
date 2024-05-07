import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DanceCategory } from '../_model/dancecategory';

@Injectable({
  providedIn: 'root'
})
export class DanceCategoryService {
  private danceCategoryUrl = 'http://localhost:8088/api/dance-categories';

  constructor(private http: HttpClient) { }

  getDanceCategories(): Observable<DanceCategory[]> {
    return this.http.get<DanceCategory[]>(this.danceCategoryUrl);
  }

  addDanceCategory(name: string, courseId: number): Observable<any> {
    const danceCategoryData = { name, course_id: courseId };
    return this.http.post<any>(this.danceCategoryUrl, danceCategoryData);
  }

  deleteDanceCategoryById(id: number): Observable<void> {
    const deleteUrl = `${this.danceCategoryUrl}/${id}`;
    return this.http.delete<void>(deleteUrl);
  }

}
