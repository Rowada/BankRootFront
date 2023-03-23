import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../_services/storage.service';
import { Router, RouterLink } from '@angular/router';
import { ComponentsModule } from '../components.module';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterLink, CommonModule],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  logout() {
    this.storageService.clean();
    return this.router.navigateByUrl('/login');
  }
  showMenu = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  // reloadPage(): void {
  //   window.location.reload();
  // }
}
