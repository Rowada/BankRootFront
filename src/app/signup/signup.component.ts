import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private api: ApiService, private router: Router) {}

  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  userSignUp() {
    const user = {
      name: this.form.value.name,
      lastname: this.form.value.lastname,
      mail: this.form.value.email,
      password: this.form.value.password,
    };
    this.api.signUp(JSON.stringify(user)).subscribe(() => {
      this.router.navigateByUrl('/login');
    });
  }
}
