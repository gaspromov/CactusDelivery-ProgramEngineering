import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirestoreAuthService } from 'src/app/shared/auth/firestoreAuth/firestore-auth.service';

@Component({
  selector: 'app-signup-carrier',
  templateUrl: './signup-carrier.component.html',
  styleUrls: ['./signup-carrier.component.css']
})
export class SignupCarrierComponent implements OnInit {
  formSignUp: FormGroup;
  disabled = false;
  step = 0;

  constructor(
    public auth: AuthService,
    public Firestore: FirestoreAuthService,
  ) { }

  ngOnInit(): void {
    this.formSignUp = new FormGroup({
      status: new FormControl({value: 'carrier', disabled: this.disabled}),
      name: new FormControl({ value: '', disabled: this.disabled }, [Validators.required, Validators.pattern('^[А-Яа-яЁё]+$')]),
      sername: new FormControl({ value: '', disabled: this.disabled }, [ Validators.required, Validators.pattern('^[А-Яа-яЁё]+$') ]),
      car_brand: new FormControl({ value: '', disabled: this.disabled  }, [Validators.required, ]),
      car_number: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      car_color: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      email: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      password: new FormControl({ value: '', disabled: this.disabled }, [ Validators.required ]),
      phone: new FormControl({value: '', disabled: this.disabled})
    })
  }

  async signup(){
    await this.auth.signup(this.formSignUp.value);
    await this.Firestore.createUser(this.formSignUp.value)
    await this.auth.signup(this.formSignUp.value);
  }

  stepN(num){
    this.step += num;
  }

}
