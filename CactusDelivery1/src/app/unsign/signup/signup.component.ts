import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  password: string;
  email: string;
  status_registr = "user"; 

  constructor( public auth: AuthService) { }

  ngOnInit(): void {
  }


  // onSignup(email:string,password:string,){

  //   let promise = new Promise((resolve, reject) => {
    
  //     this.auth.createUserWithEmailAndPassword(email, password).then(
  //       result => alert('Все окей'),
  //       error => alert("Ошибка: " + error.message)
  //     );
  //   })    
  // }
}

