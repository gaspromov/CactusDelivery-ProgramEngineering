import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { FirestoreAuthService } from 'src/app/shared/auth/firestoreAuth/firestore-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  userData: any;
  password: string;
  
  constructor(
    public authService: AuthService,
    public FireStore: FirestoreAuthService,
    public router: Router
  ) {}

  ngOnInit(){
  }

  async login(email, password){
    this.authService.login(email, password);
    this.FireStore.setUserData(email);
  }

  // onLogin(email:string,password:string){

  //   let promise = new Promise((resolve, reject) => {
    
  //   this.auth.signInWithEmailAndPassword(email, password).then(
  //   result => alert('Все окей'),
  //   error => alert("Ошибка: " + error.message)
  //   );
    
  //   });    
  //   }
}
