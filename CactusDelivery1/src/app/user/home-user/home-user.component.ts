import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { FirestoreAuthService } from 'src/app/shared/auth/firestoreAuth/firestore-auth.service';
import { UserStore } from 'src/app/shared/models/user-store';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  userData: any = [{}]

  constructor(
    public db: FirestoreAuthService,
    public authService: AuthService,
  ) { 
  }

  async ngOnInit() {
}

  setUserData(){
  }


}
