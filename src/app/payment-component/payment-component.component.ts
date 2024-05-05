import { Component, OnInit } from '@angular/core';
import { ServicePaymentService } from '../_Payment_consummer/service-payment.service';
import {loadStripe, Stripe} from '@stripe/stripe-js';

@Component({
  selector: 'app-payment',
  templateUrl: './payment-component.component.html',
})
export class PaymentComponent implements OnInit {
  stripe: Stripe | null = null;
  cardElement: any;
  stripePromise = loadStripe('pk_test_51OyVIRRqJE5dvwz7uHUx5elDu4epPonTkqs0gkjTFEmRlEbmQqevEu0aWAncrJK6erWWXV4sJXNbZsiJloXcE95d00UMtjoKXX');
  paymentSuccess: boolean = false;
  isLoading: boolean = false;
  constructor(private stripeService: ServicePaymentService) {}

  async ngOnInit() {
    const stripe = await this.stripePromise;
    if (stripe) {
      this.stripe = stripe;
      const elements = stripe.elements();
      this.cardElement = elements.create('card');
      this.cardElement.mount('#card-element');
    }
  }

  async createPayment(event: Event) {
    event.preventDefault();

    if (this.stripe && this.cardElement) {
      this.isLoading = true;
      try {
        const {clientSecret} = await this.stripeService.createPaymentIntent("nadia.nebhen@hotmail.com", 50, "USD");
        const {error, paymentMethod} = await this.stripe.createPaymentMethod({
          type: 'card',
          card: this.cardElement,
        });

        if (error) {
          console.error('Payment method creation error:', error);
        } else {
          const result = await this.stripe.confirmCardPayment(clientSecret, {
            payment_method: paymentMethod.id,
          });

          if (result.error) {
            console.error('Payment error:', result.error);
          } else {
            this.paymentSuccess = true
            const competitonId = localStorage.getItem("competitionId");
            if (competitonId)
            this.stripeService.ReserveTicket(competitonId,"card").subscribe()
            console.log('Payment succeeded:', result.paymentIntent);
          }
        }
      }
     catch (err) {
      console.error('Payment process error:', err);
    } finally {
      this.isLoading = false;
    }

    }
  }
}
