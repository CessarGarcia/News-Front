import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateNewsComponent } from './crud-news/pages/create-news/create-news.component';
import { AuthGuard } from './guards/auth.guard';

import { WeatherComponent } from './weather/weather.component';
import {CriptoComponent} from './cripto/cripto.component';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "crud-news",
    loadChildren: () => import("./crud-news/crud-news.module").then(m => m.CrudNewsModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: "create-news",
    // loadChildren: () => import("./crud-news/pages/create-news/create-news.component").then(m => m.CreateNewsComponent),
    component: CreateNewsComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'editar-noticia/:id',
    component: CreateNewsComponent 
  },
  {
    path: "weather",
    component: WeatherComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: "Criptomonedas",
    component: CriptoComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: "**",
    redirectTo: "auth"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
