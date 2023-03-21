import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit(): void {}

  get isLoggedIn() {
    return this.storageService.isLoggedIn();
  }
  logout() {
    sessionStorage.removeItem('auth-user');
    return this.router.navigateByUrl('/login');
  }
  showMenu = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  reloadPage(): void {
    window.location.reload();
  }
}
