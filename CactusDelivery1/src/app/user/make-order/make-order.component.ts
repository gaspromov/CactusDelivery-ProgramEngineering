import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/firestore/orders/orders.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {
  userdata = JSON.parse(localStorage.getItem('userData'));
  formOrder: FormGroup;
  disabled = false;


  constructor(
    public db: OrdersService,
  ) { }

  ngOnInit(): void {

    this.formOrder = new FormGroup({
      uid: new FormControl( {value: this.userdata.uid, disabled: this.disabled} ),
    })
  }

}
