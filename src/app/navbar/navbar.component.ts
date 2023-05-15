import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router){}
  
  logout(){
    localStorage.clear();
    this.router.navigateByUrl("/auth");
  }

  gotoFaq(){
    this.router.navigateByUrl("/comentarios");
  }

  goToNoticias(){
    this.router.navigateByUrl("/crud-news");
  }

  goToClima(){
    this.router.navigateByUrl("/weather");
  }

  goToCripto(){
    this.router.navigateByUrl("/Criptomonedas");
  }
}