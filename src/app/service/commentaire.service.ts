import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commentaire } from '../_model/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private baseUrl = 'http://localhost:8088/api/commentaires';

  constructor(private http: HttpClient) { }

  getAllCommentaires(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(this.baseUrl);
  }

  addCommentaire(commentaire: Commentaire): Observable<Commentaire> {
    return this.http.post<Commentaire>(this.baseUrl, commentaire);
  }
}
