import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { newsModels } from '../../../models/news.models';
import {CrudService} from '../../../services/crud-news.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit{
  noticiaForm: FormGroup;
  id: string | null;

  constructor(private fb: FormBuilder, private aRouter: ActivatedRoute, private router: Router, private _crudService: CrudService) {
    this.noticiaForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      pais: ['', Validators.required],
    }) 
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  crearNoticia() {
    console.log(this.noticiaForm);
    const NOTICIA: newsModels = {
      titulo: this.noticiaForm.get('titulo')?.value,
      descripcion: this.noticiaForm.get('descripcion')?.value,
      categoria: this.noticiaForm.get('categoria')?.value,
      pais: this.noticiaForm.get('pais')?.value,
    }

    //Condicional para verificar que el id no este vacio 
    if(this.id !== null){
      //Editar noticia
      this._crudService.putNoticia(this.id, NOTICIA).subscribe(data =>{
        Swal.fire({
          title: "Noticia actualizada",
          icon: "info"
        })
        this.router.navigate(['/crud-news']);
      }, error => {
        console.log(error);
        this.noticiaForm.reset();
      })
    }else{
      //Agregar noticia
      console.log(NOTICIA);
      this._crudService.savenoticia(NOTICIA).subscribe(data => {
        Swal.fire({
          title: "Noticia registrada",
          icon: "success",
        })
        this.router.navigate(['/crud-news']);
      }, error =>{
        console.log(error);
        this.noticiaForm.reset();
      })
    }
  }

  esEditar(){
    if(this.id !== null){
      this._crudService.getNoticia(this.id).subscribe(data => {
        this.noticiaForm.setValue({
          titulo: data.readnoticia.titulo,
          descripcion: data.readnoticia.descripcion,
          categoria: data.readnoticia.categoria,
          pais: data.readnoticia.pais,
        })
      })
    }
  }

}
