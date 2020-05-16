import { Component, OnInit } from '@angular/core';
import { FirestoreAuthService } from 'src/app/shared/auth/firestoreAuth/firestore-auth.service';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: any = [{}];

  constructor(
    public db: FirestoreAuthService,
    public auth: AuthService,
  ) { }

  ngOnInit(){
    this.db.getUsers().subscribe(data =>{
      this.users = data.map( e => {
        return {
        uid: e.payload.doc.id,
        status: e.payload.doc.get('status'),
        email: e.payload.doc.get('email'),
        name: e.payload.doc.get('name'),
        sername: e.payload.doc.get('sername'),
        phone: e.payload.doc.get('phone'),
        car_brand: e.payload.doc.get('car_brand'),
        car_number: e.payload.doc.get('car_number'),
        car_color: e.payload.doc.get('car_color'),
        vk_link: e.payload.doc.get('vk_link')
      }
        // this.setVariable(e);
      })
    } )
  }

  onDeleteCarrier(user_id){
    this.db.updateUser(user_id, {status: 'user'})
  }

}
