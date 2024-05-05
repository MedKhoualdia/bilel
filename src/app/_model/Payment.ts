export class Payment{
  paymentId!:number;
  amount!:number;
  dateOfPayment!:Date;
  paymentWay!:PaymentWay;
}
export enum PaymentWay{
  Bank_Transfer,
  Speices
}
