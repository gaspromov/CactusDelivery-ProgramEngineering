import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/firestore/orders/orders.service';
import { UserStore } from 'src/app/shared/models/user-store';


@Component({
  selector: 'app-last-user-orders',
  templateUrl: './last-user-orders.component.html',
  styleUrls: ['./last-user-orders.component.css']
})
export class LastUserOrdersComponent implements OnInit {
  items: any = [{}];
  ids = [];
  item3={ address1: "item3", address2: '3' }
  item;

  constructor(
    private db: OrdersService,
  ) { }

  async ngOnInit() {
    this.db.getOrders().subscribe(data => {
      this.items = data.map(e => {
        return {
          id: e.payload.doc.id,
          address1: e.payload.doc.get("address1"),
          address2: e.payload.doc.get("address2"),
        }
      })
    });
  }


  add(){
    this.db.addOrders({addres1: 'hhhhhh'})
    console.log('yee')
  }

  delete(){
    localStorage.removeItem('userId')
    console.log(localStorage.getItem('userId'))
  }
}
