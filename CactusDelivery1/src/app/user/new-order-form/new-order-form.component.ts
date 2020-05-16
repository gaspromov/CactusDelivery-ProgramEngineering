import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrdersService } from 'src/app/shared/firestore/orders/orders.service';

@Component({
  selector: 'app-new-order-form',
  templateUrl: './new-order-form.component.html',
  styleUrls: ['./new-order-form.component.css']
})
export class NewOrderFormComponent implements OnInit {
  userData = JSON.parse(localStorage.getItem('userData'))
  step: number = 0;
  formNewOrder: FormGroup;
  km_price: number;
  disabled = false;
  price: string = "";
  date = new Date();

  constructor(
    public db: OrdersService,
  ) { }

  ngOnInit(): void {
    this.db.getTariffs().subscribe( data => {
      this.km_price = Number(data[0].payload.doc.get('km_price'));
    })
    this.formNewOrder = new FormGroup({
      uid: new FormControl( { value:  this.userData.uid, disabled: this.disabled } ),
      name_sender: new FormControl( { value: this.userData.name + " " + this.userData.sername, disabled: this.disabled }, [Validators.required] ),
      address_sender: new FormControl( { value: "", disabled: this.disabled }, [ Validators.required ] ),
      phone_sender: new FormControl( { value: this.userData.phone, disabled: this.disabled }, [ Validators.required ] ),
      name_recipient: new FormControl( { value: "", disabled: this.disabled }, [ Validators.required ] ),
      address_recipient: new FormControl({ value: "", disabled: this.disabled }, [ Validators.required ]),
      phone_recipient: new FormControl({ value: "", disabled: this.disabled }, [ Validators.required ]),
      km: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      price: new FormControl( {value: '', disabled: this.disabled} ),
      cid: new FormControl( {value: 'null', disabled: this.disabled} ),
      data: new FormControl( {value: this.getDate(), disabled: this.disabled} ),
      status: new FormControl( {value: 'Ищем доставщика', disabled: this.disabled} )
    })
  }

  getDate(){
    let date = `${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()} ${this.date.getHours()}:${this.date.getMinutes()}`;
    return date;
  }

  newOrder(){
    this.formNewOrder.value.price = this.formNewOrder.value.km * this.km_price;
    this.db.addOrders(this.formNewOrder.value);
  }

  stepN(n: number){
    this.step +=n;
  }

}
