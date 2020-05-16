import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Router } from '@angular/router';
import { FirestoreAuthService } from 'src/app/shared/auth/firestoreAuth/firestore-auth.service';

@Component({
  selector: 'app-profile-carrier',
  templateUrl: './profile-carrier.component.html',
  styleUrls: ['./profile-carrier.component.css']
})
export class ProfileCarrierComponent implements OnInit {
  formProfile: FormGroup;
  userData: any = {};
  disabled = false;
  confirm = false;

  constructor(
    public firestore: FirestoreAuthService,
    public router: Router,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(this.userData)
    this.formProfile = new FormGroup({
      name: new FormControl({value: this.userData.name, disabled: this.disabled}, [Validators.required]),
      sername: new FormControl({value: this.userData.sername, disabled: this.disabled}, [Validators.required]),
      email: new FormControl({value: this.userData.email, disabled: !this.disabled}, [Validators.required]),
      phone: new FormControl({value: this.userData.phone, disabled: this.disabled}, [Validators.required]),
      car_brand: new FormControl({value: this.userData.car_brand, disabled: !this.disabled}, [Validators.required]),
      car_color: new FormControl({value: this.userData.car_color, disabled: !this.disabled}, [Validators.required]),
      car_number: new FormControl({value: this.userData.car_number, disabled: !this.disabled}, [Validators.required]),
    })
  }

  onUpdate(){
    // if (this.formProfile.value.password){
    //   this.auth.updateUserPassword(this.formProfile.value.password);
    //   this.formProfile.value.password = null;
    // }
    this.firestore.updateUser(this.userData.uid, this.formProfile.value);
    this.firestore.setUserData(this.userData.email);
    this.confirm = true;
  }

}
