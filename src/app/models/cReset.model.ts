// auth.model.ts

export interface CResetPasswordRequest {
  email: string;
  resetToken : string;
  newPassword: string;
}

export interface CResetPasswordResponse {
  email: string;
   messageResponse:string;

}
