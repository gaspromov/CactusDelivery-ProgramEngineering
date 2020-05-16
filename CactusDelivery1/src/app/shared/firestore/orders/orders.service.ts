import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  item;

  constructor(
    public firestore: AngularFirestore,
    public router: Router,
  ) { }


  getOrders(){
      
    return this.firestore.collection('orders').snapshotChanges();
  }

  getUserOrders(id_user){
    return this.firestore.collection('orders', ref => ref.where('uid', '==', id_user)).snapshotChanges();
  }

  getTariffs(){
    return this.firestore.collection('tariffs').snapshotChanges()
  }

  addOrders(data){
    this.firestore.collection('orders/').add(data)
    .then( () => {
      this.router.navigate(['user/order-confirm']);
    });
  }

  getNewOrders(){
    return this.firestore.collection('orders', ref => ref.where('cid', '==', 'null')).snapshotChanges();
  }

  getCarrierOrders(cid: string){
    return this.firestore.collection('orders', ref => ref.where('cid', '==', cid)).snapshotChanges();
  }

  updateOrder(id: string, data_order){
    this.firestore.doc('orders/' + id).update(data_order);
  }
  
  deleteOrder(id: string){
    this.firestore.doc('orders/' + id).delete();
  }
}
