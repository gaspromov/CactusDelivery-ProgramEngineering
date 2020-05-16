import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './unsign/signup/signup.component';
import { LoginComponent } from './unsign/login/login.component';
import { ForgotPasswordComponent } from './unsign/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './unsign/verify-email/verify-email.component';
import { ListComponent } from './sign/list/list.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { IsauthGuard } from './shared/auth/isauth.guard';
import { HomeUnsignComponent } from './unsign/home-unsign/home-unsign.component';
import { HomeUserComponent } from './user/home-user/home-user.component';
import { MainUserComponent } from './user/main-user/main-user.component';
import { ProfileUserComponent } from './user/profile-user/profile-user.component';
import { MakeOrderComponent } from './user/make-order/make-order.component';
import { CurrentOrdersComponent } from './user/current-orders/current-orders.component';
import { OrderConfirmComponent } from './user/order-confirm/order-confirm.component';
import { HomeCarrierComponent } from './carrier/home-carrier/home-carrier.component';
import { IscarrierGuard } from './shared/guards/iscarrier.guard';
import { IsuserGuard } from './shared/guards/isuser.guard';
import { ProfileCarrierComponent } from './carrier/profile-carrier/profile-carrier.component';
import { NewOrdersCarrierComponent } from './carrier/new-orders-carrier/new-orders-carrier.component';
import { CurrentOrdersCarrierComponent } from './carrier/current-orders-carrier/current-orders-carrier.component';
import { IsadminGuard } from './shared/guards/isadmin.guard';
import { OrdersAdminComponent } from './admin/orders-admin/orders-admin.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { PromokodsComponent } from './admin/promokods/promokods.component';
import { TariffsComponent } from './admin/tariffs/tariffs.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: 'unsign/home', component: HomeUnsignComponent, canActivate: [IsauthGuard],},
  { path: 'user', component: HomeUserComponent, canActivate: [AuthGuard, IsuserGuard],
      children:[ 
        { path: 'home', component: MainUserComponent },
        { path: 'profile', component: ProfileUserComponent},
        { path: 'newOrder', component: MakeOrderComponent },
        { path: 'orders', component: CurrentOrdersComponent },
        { path: 'order-confirm', component: OrderConfirmComponent }
      ]
  },

  { path: 'carrier', component: HomeCarrierComponent, canActivate: [AuthGuard, IscarrierGuard],

    children:[ 
      { path: 'profile', component: ProfileCarrierComponent },
      { path: 'newOrders', component: NewOrdersCarrierComponent },
      { path: 'orders', component: CurrentOrdersCarrierComponent },
    ]
  },

  { path: 'admin', component: HomeAdminComponent, canActivate: [AuthGuard, IsadminGuard],

    children:[ 
      { path: 'orders', component: OrdersAdminComponent },
      { path: 'users', component: AllUsersComponent },
      { path: 'promo', component: PromokodsComponent },
      { path: 'tariffs', component: TariffsComponent }
    ]
  },
  { path: '**', redirectTo: "/unsign/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
