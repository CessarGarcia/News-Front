import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudNewsRoutingModule } from './crud-news-routing.module';
import { MainNewsComponent } from './pages/main-news/main-news.component';
import { UpdateComponent } from './pages/update/update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateNewsComponent } from './pages/create-news/create-news.component';



@NgModule({
  declarations: [
    MainNewsComponent,
    UpdateComponent,
    CreateNewsComponent,
  ],
  imports: [
    CommonModule,
    CrudNewsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CrudNewsModule { }
