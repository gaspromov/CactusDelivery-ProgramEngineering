import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isLogin = false;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.isLogin = this.auth.isLoggedIn;
  }

}
