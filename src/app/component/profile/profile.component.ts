import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';
import { StorageService } from '../../_services/storage.service';

@Component({
  standalone: true,
  selector: 'app-profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  data: any;

  constructor(
    private storageService: StorageService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getProfile().subscribe((userData) => {
      this.apiService.getUserById(Object(userData)['sub']).subscribe((data) => {
        this.data = data;
        console.log(userData);
      });
    });
  }
}
