import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {CrudService} from '../../../services/crud.service';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.css'],
})
export class MainNewsComponent implements OnInit{
  news: Array<any> = [];
  user: any;
  newNoticiaForm: FormGroup =  this.formBuilder.group({
    newNoticia: [""]
  });

  constructor(private crudService: CrudService, private router: Router, private formBuilder :FormBuilder){}

  ngOnInit(): void {
    this.user = this.crudService.user;
    this.crudService.read().subscribe((res) =>{
      this.news = res.noticia;
    });
  }

  delete(id: string){
    this.crudService.delete(id).subscribe(response =>{
      this.crudService.read().subscribe((res) =>{
        this.news = res.noticia;
      })
    })
  }

  create(){
    console.log(this.newNoticiaForm.value.newNoticia);
    this.crudService.create(this.newNoticiaForm.value.newNoticia).subscribe((response) =>{
      this.newNoticiaForm.reset();

      this.crudService.read().subscribe((res) =>{
        this.news = res.noticia;
      });
    });
  }

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
