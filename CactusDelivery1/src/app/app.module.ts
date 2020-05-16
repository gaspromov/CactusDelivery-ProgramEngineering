import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { IgxMaskModule, IgxInputGroupModule } from 'igniteui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './unsign/login/login.component';
import { SignupComponent } from './unsign/signup/signup.component';
import { ForgotPasswordComponent } from './unsign/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './unsign/verify-email/verify-email.component';
import { ListComponent } from './sign/list/list.component';
import { AuthService } from './shared/auth/auth.service';
import { SortPipe } from './shared/pipes/sort.pipe';
import { AboutComponent } from './forAll/about/about.component';
import { GarantCarouselComponent } from './forAll/garant-carousel/garant-carousel.component';
import { PartnersCarouselComponent } from './forAll/partners-carousel/partners-carousel.component';
import { MainForAllComponent } from './forAll/main-for-all/main-for-all.component';
import { BannerCarouselComponent } from './forAll/banner-carousel/banner-carousel.component';
import { MainUserComponent } from './user/main-user/main-user.component';
import { HeaderUserComponent } from './user/header-user/header-user.component';
import { FooterUserComponent } from './user/footer-user/footer-user.component';
import { LastUserOrdersComponent } from './user/last-user-orders/last-user-orders.component';
import { HeaderUnsignComponent } from './unsign/header-unsign/header-unsign.component';
import { FooterUnsignComponent } from './unsign/footer-unsign/footer-unsign.component';
import { HomeUnsignComponent } from './unsign/home-unsign/home-unsign.component';
import { SignupGarantComponent } from './unsign/register/signup-garant/signup-garant.component';
import { SignupUserComponent } from './unsign/register/signup-user/signup-user.component';
import { SignupCarrierComponent } from './unsign/register/signup-carrier/signup-carrier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeUserComponent } from './user/home-user/home-user.component';
import { ProfileUserComponent } from './user/profile-user/profile-user.component';
import { MakeOrderComponent } from './user/make-order/make-order.component';
import { CurrentOrdersComponent } from './user/current-orders/current-orders.component';
import { NewOrderFormComponent } from './user/new-order-form/new-order-form.component';
import { OrderConfirmComponent } from './user/order-confirm/order-confirm.component';
import { HomeCarrierComponent } from './carrier/home-carrier/home-carrier.component';
import { MainCarrierComponent } from './carrier/main-carrier/main-carrier.component';
import { FooterCarrierComponent } from './carrier/footer-carrier/footer-carrier.component';
import { NewOrdersCarrierComponent } from './carrier/new-orders-carrier/new-orders-carrier.component';
import { HeaderCarrierComponent } from './carrier/header-carrier/header-carrier.component';
import { ProfileCarrierComponent } from './carrier/profile-carrier/profile-carrier.component';
import { CurrentOrdersCarrierComponent } from './carrier/current-orders-carrier/current-orders-carrier.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { OrdersAdminComponent } from './admin/orders-admin/orders-admin.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { PromokodsComponent } from './admin/promokods/promokods.component';
import { TariffsComponent } from './admin/tariffs/tariffs.component';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { FooterAdminComponent } from './admin/footer-admin/footer-admin.component';
import { ErrorComponent } from './forAll/error/error.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ListComponent,
    SortPipe,
    AboutComponent,
    GarantCarouselComponent,
    PartnersCarouselComponent,
    MainForAllComponent,
    BannerCarouselComponent,
    MainUserComponent,
    HeaderUserComponent,
    FooterUserComponent,
    LastUserOrdersComponent,
    HeaderUnsignComponent,
    FooterUnsignComponent,
    HomeUnsignComponent,
    SignupGarantComponent,
    SignupUserComponent,
    SignupCarrierComponent,
    HomeUserComponent,
    ProfileUserComponent,
    MakeOrderComponent,
    CurrentOrdersComponent,
    NewOrderFormComponent,
    OrderConfirmComponent,
    HomeCarrierComponent,
    MainCarrierComponent,
    FooterCarrierComponent,
    NewOrdersCarrierComponent,
    HeaderCarrierComponent,
    ProfileCarrierComponent,
    CurrentOrdersCarrierComponent,
    HomeAdminComponent,
    OrdersAdminComponent,
    AllUsersComponent,
    PromokodsComponent,
    TariffsComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IgxMaskModule,
    IgxInputGroupModule
  ],
  exports: [RouterModule],
  providers: [AuthService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
