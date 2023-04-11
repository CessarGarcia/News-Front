import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', 'login-responsive.component.css']
})
export class LoginComponent {
  miFormulario: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  })

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService){

  }

  login(){
    console.log(this.miFormulario.value);
    
    this.authService.login(this.miFormulario.value).subscribe(res =>{
      if(res === true){
        localStorage.setItem("user", JSON.stringify(this.authService.user));
        this.router.navigateByUrl("/crud-news");
      }else{
        Swal.fire({
          title: "Error",
          text: res,
          icon: "error",
        })
      }      
    })
  }
}
