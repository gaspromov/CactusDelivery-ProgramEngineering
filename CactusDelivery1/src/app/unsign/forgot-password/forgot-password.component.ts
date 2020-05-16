import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: string = '';
  success;
  send;

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.success = false;
  }

  forgot(email){
    this.success = this.authService.ForgotPassword(email);
    this.send = true;
  }

}
