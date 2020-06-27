import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirestoreAuthService } from 'src/app/shared/auth/firestoreAuth/firestore-auth.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  formProfile: FormGroup;
  userData: any = {};
  disabled = false;
  confirm = false;

  constructor(
    public firestore: FirestoreAuthService,
    public router: Router,
    public auth: AuthService,
  ) { }

  async ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(this.userData)
    this.formProfile = new FormGroup({
      name: new FormControl({value: this.userData.name, disabled: this.disabled}, [Validators.required]),
      sername: new FormControl({value: this.userData.sername, disabled: this.disabled}, [Validators.required]),
      vk_link: new FormControl({value: this.userData.vk_link, disabled: this.disabled}, [Validators.required]),
      email: new FormControl({value: this.userData.email, disabled: !this.disabled}, [Validators.required]),
      phone: new FormControl({value: this.userData.phone, disabled: this.disabled}, [Validators.required]),
      password: new FormControl({value: "", disabled: this.disabled}),
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
