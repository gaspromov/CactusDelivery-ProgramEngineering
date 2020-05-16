import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserStore } from '../../models/user-store';

@Injectable({
  providedIn: 'root'
})
export class FirestoreAuthService {
  userData: any;
  store: any;

  constructor(
    public firestore: AngularFirestore,
  ) { }


  setUserData(email: string) {
    this.firestore.collection('users', ref => ref.where('email', '==', email)).snapshotChanges().subscribe(res => {
      let userData = this.setVariable(res);
      localStorage.setItem('userData', JSON.stringify(userData)); //Use the returned data as you normally would
    });
  }

  setVariable(res){
    let userData;
    if (res[0].payload.doc.get('status') == 'user'){
      userData = {
        uid: res[0].payload.doc.id,
        status: res[0].payload.doc.get('status'),
        email: res[0].payload.doc.get('email'),
        name: res[0].payload.doc.get('name'),
        sername: res[0].payload.doc.get('sername'),
        phone: res[0].payload.doc.get('phone'),
        vk_link: res[0].payload.doc.get('vk_link')
      };
    }else if (res[0].payload.doc.get('status') == 'carrier'){
      userData = {
        uid: res[0].payload.doc.id,
        status: res[0].payload.doc.get('status'),
        email: res[0].payload.doc.get('email'),
        name: res[0].payload.doc.get('name'),
        sername: res[0].payload.doc.get('sername'),
        phone: res[0].payload.doc.get('phone'),
        car_brand: res[0].payload.doc.get('car_brand'),
        car_number: res[0].payload.doc.get('car_number'),
        car_color: res[0].payload.doc.get('car_color')
      };
    }else if(res[0].payload.doc.get('status') == 'admin'){
      userData = {
        uid: res[0].payload.doc.id,
        status: res[0].payload.doc.get('status'),
        email: res[0].payload.doc.get('email'),
        username: res[0].payload.doc.get('name'),
      };
    }
    return userData;
  }

  // getSchedule() {
  //   return this.firestore
  //     .collection("users")
  //     .doc('8CtHJR8xrAbEwSFqxlNG')
  //     .ref.get()
  //     .then(function(doc) {
  //       return doc.data();   // here...
  //     });
  // }

  createUser(data_user){
    return this.firestore.collection('users/').add(data_user);
  }
  
  updateUser(id_user: string, data_user){
    // delete policy.id;
    this.firestore.doc('users/' + id_user).update(data_user);
  }

  deleteUser(id: string){
    this.firestore.doc('users/' + id).delete();
  }

  getUsers(){
    return this.firestore.collection('users/').snapshotChanges()
  }
}
