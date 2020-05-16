import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/firestore/orders/orders.service';

@Component({
  selector: 'app-new-orders-carrier',
  templateUrl: './new-orders-carrier.component.html',
  styleUrls: ['./new-orders-carrier.component.css']
})
export class NewOrdersCarrierComponent implements OnInit {
  orders: any = [{}];
  newOrder: boolean = false;

  constructor(
    public db: OrdersService,
  ) { }

  ngOnInit(): void {
    this.db.getNewOrders().subscribe(data => {
      this.orders = data.map( e => {
        return this.setOrders(e);
      })
    })
  }

  onTake(order_id: string){
    this.db.updateOrder(order_id, {cid: JSON.parse(localStorage.getItem('userData')).uid, status: 'Выехали за посылкой'});
    this.newOrder = true;
  }

  setOrders(e){
    let orders = {
      id: e.payload.doc.id,
      data: e.payload.doc.get('data'),
      phone_sender: e.payload.doc.get('phone_sender'),
      name_sender: e.payload.doc.get('name_sender'),
      name_recipient: e.payload.doc.get('name_recipient'),
      phone_recipient: e.payload.doc.get('phone_recipient'),
      address_recipient: e.payload.doc.get('address_recipient'),
      address_sender: e.payload.doc.get('address_sender'),
    }
    return orders;
  }

}
