import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/firestore/orders/orders.service';

@Component({
  selector: 'app-current-orders',
  templateUrl: './current-orders.component.html',
  styleUrls: ['./current-orders.component.css']
})
export class CurrentOrdersComponent implements OnInit {
  orders: any = [{}];

  constructor(
    public db: OrdersService,
  ) { }

  ngOnInit(){
    this.db.getUserOrders(JSON.parse(localStorage.getItem('userData')).uid).subscribe( data =>{
      this.orders = data.map( e => {
        return e.payload.doc.data();
      })
    })
  }

}
