import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudNewsRoutingModule } from './crud-news-routing.module';
import { MainNewsComponent } from './pages/main-news/main-news.component';


@NgModule({
  declarations: [
    MainNewsComponent
  ],
  imports: [
    CommonModule,
    CrudNewsRoutingModule
  ]
})
export class CrudNewsModule { }
