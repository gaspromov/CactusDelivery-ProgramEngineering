import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-signup-garant',
  templateUrl: './signup-garant.component.html',
  styleUrls: ['./signup-garant.component.css']
})
export class SignupGarantComponent implements OnInit {
  formSignUp: FormGroup;
  disabled = false;
  step = 0;

  constructor(
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.formSignUp = new FormGroup({
      category_id: new FormControl({value: '4', disabled: this.disabled}),
      name: new FormControl({ value: '', disabled: this.disabled }, [Validators.required, Validators.pattern('^[А-Яа-яЁё]+$')]),
      surname: new FormControl({ value: '', disabled: this.disabled }, [ Validators.required, Validators.pattern('^[А-Яа-яЁё]+$') ]),
      vk_link: new FormControl({ value: '', disabled: this.disabled  }, [Validators.required, ]),
      feedback_number: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      feedback_vk_link: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      email: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      password: new FormControl({ value: '', disabled: this.disabled }, [ Validators.required ]),
      phone: new FormControl({value: '', disabled: this.disabled})
    })
  }

  async signup(){
    await this.auth.signup(this.formSignUp.value);
  }

  stepN(num){
    this.step += num;
  }

}
