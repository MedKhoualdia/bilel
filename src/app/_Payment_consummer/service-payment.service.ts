import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {loadStripe} from "@stripe/stripe-js";

@Injectable({
  providedIn: 'root'
})
export class ServicePaymentService {
  private token = localStorage.getItem("token");
  constructor(private http: HttpClient) { }

  async createPaymentIntent(email: string, amount: number,currency :string): Promise<any> {
    return fetch('http://localhost:8088/api/payments/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, amount,currency }),
    }).then(response => response.json());
  }
  ReserveTicket(competitionId : string,paymentType:string){

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.http.post(`http://localhost:8088/reservations/create/${(competitionId)}/${paymentType}`,null, { headers });
  }
}
