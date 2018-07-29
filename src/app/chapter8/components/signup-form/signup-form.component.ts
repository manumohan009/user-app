import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  isValid: boolean;
  form = new FormGroup({
      'username': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace,
      // UsernameValidators.shouldBeUnique
    ]),
    'password': new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }

  login() {
    //let isValid = authService.login(this.form.value);
    //console.log("in login fn");
    this.isValid = false;
    if(!this.isValid) {
      this.form.setErrors({
        invalidLogin: true
      });
    }

  }
}
