import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evaluation } from '../models/Evaluation';
import { Observable } from 'rxjs';
import { Criterion } from '../models/Criterion';
import { Score } from '../models/Score';
import { Competition } from '../_model/Competition';
import { User } from '../_model/User';
import { AvisScore } from '../models/AvisScore';

@Injectable({
  providedIn: 'root'
})
export class EvaluationSerivceService {

  constructor(private http:HttpClient) { }

  getAllCompetition(): Observable<Competition[]> {

    return this.http.get<Competition[]>("http://localhost:8088/evaluations/allcompetions");
  }

  getAllEvaluations(): Observable<Evaluation[]> {

    return this.http.get<Evaluation[]>("http://localhost:8088/evaluations/all");
  }
  addEvaluation( idscores: number[],idc:number,Firstname:string,Lastname:string): Observable<Evaluation> {
    return this.http.post<Evaluation>(`http://localhost:8088/evaluations/add/${idc}/${Firstname}/${Lastname}`, idscores);
  }
  deleteEvaluation(id: number): Observable<any>{
    const url = `http://localhost:8088/evaluations/delete/${id}`;
    return this.http.delete(url,);
  }

  Addscore( c:Criterion,Firstname:string,Lastname:string): Observable<Score> {
    return this.http.post<Score>(`http://localhost:8088/scores/Addscore/${Firstname}/${Lastname}`, c);
  }

  UpdateScore( c:Criterion,id:number): Observable<Score> {
    return this.http.post<Score>(`http://localhost:8088/scores/UpdateScore/${id}`, c);
  }

  DeleteScore(id: number): Observable<any>{
    const url = `http://localhost:8088/scores/DeleteScore/${id}`;
    return this.http.delete(url,);
  }

  downloadExcel( c:Competition) {

    return this.http.post(`http://localhost:8088/evaluations/downloadExcel`, c,{ responseType: 'blob' });
  }
  importExcel(id: number, firstName: string, lastName: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.put(`http://localhost:8088/evaluations/importExcel/${id}/${firstName}/${lastName}`, formData);
  }

  Userscore( u:User): Observable<Competition> {
    return this.http.post<Competition>(`http://localhost:8088/scores/scoreuser`, u);
  }

  AvisScore( a:AvisScore,ids:number,idc:number): Observable<AvisScore> {
    return this.http.post<AvisScore>(`http://localhost:8088/scores/feedback/${ids}/${idc}`, a);
  }
  evalbyid(id:number):Observable<Evaluation>{
    return this.http.get<Evaluation>(`http://localhost:8088/evaluations/eva/${id}`);
  }
  Sendemail(id:number,url:string){
    return this.http.post(`http://localhost:8088/scores/sendurl/${id}`,url);
  }



}
