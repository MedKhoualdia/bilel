export class  User {
  userId!:number
  role!:Role
  firstName!:string
  lastName!:string
  birthday!:Date
  email!:string
  password!:string
  phoneNumber!:number

}
export enum Role{
  ADMIN,
  PARTICIPANT,
  JUDGE,
  INSTRUCTOR,
  DS_DIRECTOR,
  SPECTATOR
}
