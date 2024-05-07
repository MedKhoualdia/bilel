import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DanceStyle } from '../_model/dancestyle';
import { DanceCategory } from '../_model/dancecategory'; // Import de DanceCategory

@Injectable({
  providedIn: 'root'
})
export class DancestyleService {
  private danceStyleUrl = 'http://localhost:8088/api/dance-styles';
  private danceCategoryUrl = 'http://localhost:8088/api/dance-categories'; // URL pour les catégories de danse

  constructor(private http: HttpClient) { }

  getDanceStyles(): Observable<DanceStyle[]> {
    return this.http.get<DanceStyle[]>(this.danceStyleUrl);
  }

  addDanceStyle(danceStyle: DanceStyle): Observable<DanceStyle> {
    return this.http.post<DanceStyle>(this.danceStyleUrl, danceStyle);
  }

  deleteDanceStyleById(id: number): Observable<void> {
    const deleteUrl = `${this.danceStyleUrl}/${id}`;
    return this.http.delete<void>(deleteUrl);
  }

  getDanceCategoryIds(): Observable<number[]> {
    return this.http.get<number[]>(this.danceCategoryUrl); // Récupérer la liste des IDs de catégories de danse
  }
}
