import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certification } from '../_model/Certification';


@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  private certificationUrl = 'http://localhost:8088/api/certifications';

  constructor(private http: HttpClient) { }

  getCertifications(): Observable<Certification[]> {
    return this.http.get<Certification[]>(this.certificationUrl);
  }

  addCertification(certification: Certification): Observable<Certification> {
    return this.http.post<Certification>(this.certificationUrl, certification);
  }

  deleteCertificationById(id: number): Observable<void> {
    const deleteUrl = `${this.certificationUrl}/${id}`;
    return this.http.delete<void>(deleteUrl);
  }
}
