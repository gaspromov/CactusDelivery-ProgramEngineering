import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/firestore/orders/orders.service';
import { FirestoreAuthService } from 'src/app/shared/auth/firestoreAuth/firestore-auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usersOpt;
  ordersOpt;

  users: any = [{}];
  orders: any = [{}];
  


  constructor(
    public db: FirestoreAuthService,
    public dbOrders: OrdersService,
  ) { }


  async ngOnInit() {
    this.db.getUsers().subscribe( data => {
      this.users = data.map( (e) =>{ return e.payload.doc.get('status');})
       this.usersOpt = this.setOption(this.users, 'users');
    })
    this.dbOrders.getOrders().subscribe( data => {
      this.orders = data.map( (e) =>{ return e.payload.doc.get('status');})
       this.ordersOpt = this.setOption(this.orders, 'orders');
    })
  }

  setOption(arr: [], type: string){
    let title: string;
    if (type == "users")
      title = "Пользователи системы";
    else
      title = "Текущие заказы";

    let option = {      
      title: {
          text: title,
          subtext: `Всего: ${arr.length}`,
          left: 'center'
      },
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [
          {
              name: 'Количество',
              type: 'pie',
              radius: '50%',
              center: ['50%', '60%'],
              data: this.setDataOpt(type, arr),
              // [
              //     {value: user, name: 'Клиенты'},
              //     {value: garant, name: 'Гаранты'},
              //     {value: carrier, name: 'Доставщики'},
              // ],
              emphasis: {
                  itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
    };
    return option;
  }

  getCountElInArr(el: string, arr: []){
    let count: number = 0;
    for (let i = 0; i < arr.length; i++){
      if ( el == arr[i])
        count++;
    }
    return count;
  }

  setDataOpt(type: string, arr: []){
    let data: any = [{}];
    if ( type == 'users'){
      data = [
        { value: this.getCountElInArr('garant', arr), name: "Гаранты" },
        { value: this.getCountElInArr('carrier', arr), name: "Курьеры" },
        { value: this.getCountElInArr('user', arr), name: "Клиенты" },
        { value: this.getCountElInArr('admin', arr), name: "Админы" }
      ]
    }else{
      data = [
        { value: this.getCountElInArr('Доставлено', arr), name: "Доставлено" },
        { value: this.getCountElInArr('Выехали за посылкой', arr), name: "Выехали за посылкой" },
        { value: this.getCountElInArr('Доставляется', arr), name: "Доставляется" },
        { value: this.getCountElInArr('Ищем доставщика', arr), name: "Ищем доставщика" }
      ]
    }
    return data;
  }

}
