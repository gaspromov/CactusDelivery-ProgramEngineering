import { Component } from '@angular/core';
import { FirestoreAuthService } from './shared/auth/firestoreAuth/firestore-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CactusDelivery';
  userData: any = [{}];
  an;
  profile: any;

  constructor(
    public db: FirestoreAuthService,
  ){}

  async ngOnInit(){
    // this.db.setUserData('tustov01@mail.ru');
    // JSON.parse(localStorage.getItem('user'))
  }

}

