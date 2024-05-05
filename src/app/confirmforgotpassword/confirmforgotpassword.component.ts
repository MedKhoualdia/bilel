import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {CResetPasswordResponse,CResetPasswordRequest} from "../models/cReset.model";
import { JwtHelperService } from '@auth0/angular-jwt';
import {error} from "jquery";

@Component({
  selector: 'app-confirmforgotpassword',
  templateUrl: './confirmforgotpassword.component.html',
  styleUrls: ['./confirmforgotpassword.component.scss']
})
export class ConfirmforgotpasswordComponent implements OnInit{
  credentials = { email: '',resetToken:'',newPassword: ''};
  errorMessage: string = '';
  user: any;
  @ViewChild('resetTokenInput') resetTokenInput!: ElementRef<HTMLInputElement>;

  constructor(private authService: AuthService,
              private router: Router,private toastr: ToastrService,private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    const jwtToken=this.route.snapshot.params['resetToken'];
    const helper = new JwtHelperService();
    if(!helper.isTokenExpired(jwtToken)) {
      localStorage.setItem('resetToken', jwtToken);
    }

    const storedToken=localStorage.getItem('resetToken')
    if (jwtToken) {
      const decodedToken = helper.decodeToken(jwtToken);
      this.credentials.email = decodedToken.sub;
      this.credentials.resetToken = decodedToken.resetToken;
    } else if(storedToken) {
      const decodedToken = helper.decodeToken(storedToken);
      this.credentials.email = decodedToken.sub;
      this.credentials.resetToken = decodedToken.resetToken;
    }

    this.router.navigate(["/forgot-password/confirm"], {
      relativeTo: this.route,
      replaceUrl: true
    }).then(() => {
      console.log('Navigation completed.');
    }).catch(err => {
      console.error('Navigation error:', err);
    });
  }
  onSubmit(): void {
    const enteredResetToken = this.resetTokenInput.nativeElement.value;


      if (enteredResetToken == this.credentials.resetToken ){
        if (!this.credentials.newPassword || this.credentials.newPassword.trim() === '') {
          this.toastr.error('please enter a password');
          return;
        }
      const cResetPasswordRequest: CResetPasswordRequest = {
        resetToken: enteredResetToken,
        email: this.credentials.email,
        newPassword: this.credentials.newPassword
      };
      this.authService.CforgetPassword(cResetPasswordRequest).subscribe(
        (user) => {
          this.toastr.success('', 'Password updated successfully!');
        }
      );}
      else {

        this.toastr.error('Failed to update password. Please try again.');

      }

  }




}
