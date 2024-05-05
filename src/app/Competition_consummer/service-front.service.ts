import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competition } from '../_model/Competition';
import { User } from '../_model/User';
import { ReturnStatement } from '@angular/compiler';
import { Multimedia } from '../_model/Multimedia';

  @Injectable({
    providedIn: 'root'
  })
  export class ServiceFrontService {

    constructor(private Http:HttpClient) { }

    joinCompetition(competition:Competition, participant:User): Observable<any> {
      const url='http://localhost:8088/CRUD/join'
      const body={
        competition:{
          competitionId:competition.competitionId
        },
        participant:{
          participantId:participant.userId
        }
      }
      return this.Http.post<any>(url, body);
    }

    uploadVideo(file: File) {
      const formData = new FormData();
      formData.append('file', file);
      return this.Http.post('http://localhost:8088/CRUD/upload_video', formData);
    }

    stream(title: string):Observable<Blob>{
      return this.Http.get('http://localhost:8088/CRUD/video'+title, {responseType:'blob'})
    }

    initiateVideoCall(file: File): Observable<any> {
      const formData = new FormData();
      formData.append('file', file);
      // Assuming you have an endpoint to initiate the video call
      return this.Http.post<any>('http://localhost:8088/CRUD/startVideoCall', formData);
    }


  }
