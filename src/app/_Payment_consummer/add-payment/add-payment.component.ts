import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicePaymentService } from "../service-payment.service";
import {ToastrService} from "ngx-toastr";



@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent {
  @ViewChild('paymentModal') paymentModal!: TemplateRef<any>;

  constructor(private router: Router, private servicePaymentService:ServicePaymentService,private toastr: ToastrService) { }

  Reserve() {
    const competitionId = localStorage.getItem("competitionId")
    if(competitionId) {
      this.servicePaymentService.ReserveTicket(competitionId, "cash").subscribe(value =>
        this.toastr.success('Your reservation will be available for 24H and will be deleted automatically .')

    )
    }
  }
  redirectToPayPal(ticketType: string) {
    // Construct PayPal checkout URL with a card entry form
    let paypalCheckoutUrl = 'https://www.paypal.com/checkout';

    // Append query parameter based on ticket type
    if (ticketType === 'standard') {
      paypalCheckoutUrl += '?flow=checkout&product=standard-ticket';
    } else if (ticketType === 'vip') {
      paypalCheckoutUrl += '?flow=checkout&product=vip-ticket';
    }

    // Redirect to PayPal checkout page
    window.location.href = paypalCheckoutUrl;
  }
}
