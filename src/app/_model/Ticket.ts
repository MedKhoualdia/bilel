export class Ticket{
  TicketId!:number;
  ticketType!:TicketType;
  price!: number;
  availability!: boolean;
}
export enum TicketType{
  SPECTATOR_STANDARD,
  SPECTATOR_VIP
}
