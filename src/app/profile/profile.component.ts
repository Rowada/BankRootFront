import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  data: any;
  idUser: any;
  constructor(
    private storageService: StorageService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getProfile().subscribe((userData) => {
      this.apiService.getUserById(Object(userData)['sub']).subscribe((data) => {
        this.data = data;
      });
    });
  }
}
