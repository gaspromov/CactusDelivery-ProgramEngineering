import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirestoreAuthService } from 'src/app/shared/auth/firestoreAuth/firestore-auth.service';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {
  formSignUp: FormGroup;
  step = 0;
  disabled = false;

  constructor(
    public auth: AuthService,
    public Firestore: FirestoreAuthService,
  ) { }

  ngOnInit(): void {
    this.formSignUp = new FormGroup({
      status: new FormControl({value: 'user', disabled: this.disabled}),
      name: new FormControl({ value: '', disabled: this.disabled }, [Validators.required, Validators.pattern('^[А-Яа-яЁё]+$')]),
      sername: new FormControl({ value: '', disabled: this.disabled }, [ Validators.required, Validators.pattern('^[А-Яа-яЁё]+$') ]),
      vk_link: new FormControl({ value: '', disabled: this.disabled  }, [Validators.required, ]),
      email: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      password: new FormControl({ value: '', disabled: this.disabled }, [ Validators.required ]),
      phone: new FormControl({value: '', disabled: this.disabled})
    })
  }

  stepN(num: number){
    this.step += num;
  }

  async signup(){
    await this.auth.signup(this.formSignUp.value);
    await this.Firestore.createUser(this.formSignUp.value)
  }

}
