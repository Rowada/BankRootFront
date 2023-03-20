import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private storageService: StorageService,

    private router: Router
  ) {}

  ngOnInit(): any {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  form = new FormGroup({
    mail: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  onSubmit(): void {
    const { mail, password } = this.form.value;

    this.authService.login(mail || '', password || '').subscribe({
      next: (data) => {
        this.storageService.saveUser(data);
        this.isLoggedIn = true;
        return this.router.navigateByUrl('/profile');
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }
}
