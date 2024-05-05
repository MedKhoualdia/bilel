import { Payment } from './../../_model/Payment';
import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { windowCount } from 'rxjs';

@Component({
  selector: 'app-detail-payment',
  templateUrl: './detail-payment.component.html',
  styleUrls: ['./detail-payment.component.scss']
})
export class DetailPaymentComponent{
  title= 'Google Pay'
  buttonColor='black'
  buttonType='buy'
  isCustomSize=250
  buttonHeight=50
  isTop= window===window.top
  paymentRequest={
    apiVersion:2,
    apiVersionMinor:0,
    allowedPaymentMethods:[
      {
        type:'CARD',
        parameters:{
          allowedPaymentMethods:["PAY_ONLY","CRYPTOGRAM_3DS"],
          allowedCardNetworks:["AMEX","VISA","MASTERCARD"]
        },

          tokenizationSpecifacation:{
            type:"PAYMENT_GATEWAY",
            parameters:{
              gateway:"example",
              gatewayMerchantI:"examplegatewayMerchantI"
            }
          }

      }
    ],
    merchantInfo:{
      merchantId:"12345678901234567890",
      merchnatName:"demo Merchant"
    },
    transactionInfo:{
      totalPriceStatus:"FINAL",
      totalPriceLabes:"Total",
      totalPrice:"100.00",
      currencyCode:"USD",
      countryCode:"US"
    }
  }
  onLoadPaymentData(event:any){
    console.log("Load Payment Data Testicodeiz", event.detail)
  }
}
