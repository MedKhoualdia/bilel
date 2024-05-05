import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SystemHealth} from "../models/system-health";

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {

  private SERVER_URL ='http://localhost:8088/actuator'

  constructor(private http:HttpClient) { }

  public getSystemHealth(): Observable<SystemHealth> {
    return this.http.get<SystemHealth>(`${this.SERVER_URL}/health`);
  }
  public extractComponentStatuses(healthData: SystemHealth): { ComponentName: string[], statuses: string[] } {
    const components = healthData.components;
    const ComponentName = Object.keys(components);
    const statuses = Object.values(components).map(component => component.status);
    return { ComponentName, statuses };
  }

  public getCountByStatus(): Observable<any> {
    return this.http.get<any>(`${this.SERVER_URL}/count-reclamations-by-status`);
  }

  public getUsersByRole(): Observable<any> {
    return this.http.get<any>(`${this.SERVER_URL}/count-users-by-role`);
  }

  public getReclamationsCountByRole(): Observable<any> {
    return this.http.get<any>(`${this.SERVER_URL}/count-reclamations-by-role`);
  }

  public getReclamationsPerUser(): Observable<any> {
    return this.http.get<any>(`${this.SERVER_URL}/custom-reclamations-per-user`);
  }
}
