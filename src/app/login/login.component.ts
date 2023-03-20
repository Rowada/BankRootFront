import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    mail: null,
    password: null,
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private apiService: ApiService,
    private storageService: StorageService,

    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { mail, password } = this.form;

    this.apiService.login(mail, password).subscribe({
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
