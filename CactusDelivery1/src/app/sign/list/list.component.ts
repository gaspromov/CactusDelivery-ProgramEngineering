import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  newPassword: string;
  userData;

  constructor(
    public authService: AuthService,
  ) { }

  async ngOnInit() {

  }



}
