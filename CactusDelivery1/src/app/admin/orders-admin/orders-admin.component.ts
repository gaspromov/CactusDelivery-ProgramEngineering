import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/firestore/orders/orders.service';

@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.css']
})
export class OrdersAdminComponent implements OnInit {
  orders: any = [{}];
  deliveried: boolean = false;
  inProcess: boolean = false;
  willArrive: boolean = false;
  noCarrier: boolean = false;
  constructor(
    public db: OrdersService,
  ) { }

  ngOnInit(){
    this.db.getOrders().subscribe( data =>{
      this.orders = data.map( e => {
        return this.setOrders(e);
      })
    })
  }
  
  onDeleteOrder(order_id: string){
    this.db.deleteOrder(order_id)
  }

  
  setOrders(e){
    let orders = {
      id: e.payload.doc.id,
      data: e.payload.doc.get('data'),
      phone_sender: e.payload.doc.get('phone_sender'),
      name_sender: e.payload.doc.get('name_sender'),
      price: e.payload.doc.get('price'),
      name_recipient: e.payload.doc.get('name_recipient'),
      phone_recipient: e.payload.doc.get('phone_recipient'),
      address_recipient: e.payload.doc.get('address_recipient'),
      address_sender: e.payload.doc.get('address_sender'),
      status: e.payload.doc.get('status'),
    }
    return orders;
  }

}
