import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewsComponent } from './pages/create-news/create-news.component';
import { MainNewsComponent } from './pages/main-news/main-news.component';

const routes: Routes = [
  {
    path: "",
    component: MainNewsComponent
  },
  {
    path: "create-news",
    component: CreateNewsComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudNewsRoutingModule { }
