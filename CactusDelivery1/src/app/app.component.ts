import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from "@angular/router";
import { FirestoreAuthService } from './shared/auth/firestoreAuth/firestore-auth.service';
import { OrdersService } from './shared/firestore/orders/orders.service';
import { UserStore } from './shared/models/user-store';

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
    // console.log(localStorage.getItem('userData'))
    // this.scheduleDetail()
    // this.db.getUser('gazratov59@gmail.com').subscribe(data => {
    //   this.userData = data.map(e => { this.an = e.payload.doc.id
    //     return e.payload.doc.data();
    //   })
    // });
    // console.log(this.an, this.userData)
    // console.log(localStorage.getItem('userApi'))
  }

  

  scheduleDetail() {
  
    // this.db.getSchedule().then(data => {
    //   console.log(data);  // ... and here
    // });
  }

}

