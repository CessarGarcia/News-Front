import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//components
import { WeatherComponent } from './weather/weather.component';
import { CriptoComponent } from './cripto/cripto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { InterceptorAuthInterceptor } from './interceptors/interceptor-auth.service';
import { ErrorApiInterceptor } from './interceptors/error-api-interceptor.service';
import { ComentariosComponent } from './comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CriptoComponent,
    NavbarComponent,
    SpinnerComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorAuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }