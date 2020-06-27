import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {
  formPassword: FormGroup;
  disabled: boolean = false;
  confirm: string = "yet";

  constructor(
    public db: AuthService,
  ) { }

  ngOnInit(): void {
    this.formPassword = new FormGroup({
      password: new FormControl({ value: '', disabled: this.disabled }, [Validators.required, Validators.minLength(6)])
    })
  }

  async newPassword(){
    this.confirm = await this.db.updateUserPassword(this.formPassword.value.password);
  }

}
