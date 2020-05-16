import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-header-carrier',
  templateUrl: './header-carrier.component.html',
  styleUrls: ['./header-carrier.component.css']
})
export class HeaderCarrierComponent implements OnInit {

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

}
