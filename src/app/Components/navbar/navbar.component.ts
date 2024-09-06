import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../Services/api-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  constructor(private service: ApiServiceService) {}
  ngOnInit(): void {
    // this.service.login();
  }

  isLoggedIn(): boolean {
    return this.service.isLoggedIn();
  }
}
