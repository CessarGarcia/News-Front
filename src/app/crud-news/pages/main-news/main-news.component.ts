import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.css'],
})
export class MainNewsComponent implements OnInit{

  user: any
  constructor(private authService: AuthService, private router: Router ){}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user") || "") ;
  }
}
