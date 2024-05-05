export class DanceVenue{
  danceVenueId!:number;
  name!:string;
  className!:string
  numberOfSeat!:number;
  competition?:any;
  location?:{
    label:string;
    x:number;
    y:number
  }
}
