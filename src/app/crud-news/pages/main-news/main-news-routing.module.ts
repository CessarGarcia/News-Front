import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { CreateNewsComponent } from '../create-news/create-news.component';

const routes: Routes = [
    {
        path: "",
        component: CreateNewsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainNewsRoutingModule { }