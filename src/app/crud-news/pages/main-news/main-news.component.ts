import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import {CrudService} from '../../../services/crud-news.service';
import {newsModels} from '../../../models/news.models';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.css'],
})
export class MainNewsComponent implements OnInit{
  listOfNoticias: newsModels[] = [];
  constructor(private _crudService: CrudService, private router: Router){}

  ngOnInit(): void {
    this.getNoticias();
  }

  getNoticias(){
    this._crudService.getNoticias().subscribe(data => {
      console.log(data);
      this.listOfNoticias = data.readnoticias;
    }, error => {
      console.log(error);
    })
  }

  deleteNoticias(id: any){
    this._crudService.deleteNoticia(id).subscribe(data =>{
      Swal.fire(
        'Eliminado Correctamente',
        '¡La noticia se ha eliminado correctamente!',
        'success'
      )
      this.getNoticias();
    }, error => {
      console.log(error);
    })
  }

  //buttons
  logout(){
    localStorage.clear();
    this.router.navigateByUrl("/auth");
  }
  crearNewButton(){
    this.router.navigate(['/create-news']);
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
