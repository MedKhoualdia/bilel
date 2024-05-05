export class Competition{
  competitionId!: number;
  name!: string;
  date!:Date;
  rules!: string;
  expirationDate!: Date;
  teamNumber!:number;
  teamsName!:string;
  selectedDanceVenue?:any;
  danceVenueAssigned!:boolean;
  latitude?: number;
  longitude?: number;
}
