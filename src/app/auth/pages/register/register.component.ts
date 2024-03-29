import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', 'register-responsive.component.css']
})
export class RegisterComponent {
  miFormulario: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    repeatPassword: ["", [Validators.required, Validators.minLength(6)]],
  })

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService){

  }

  async register(){
    const {email, username, password, repeatPassword} = this.miFormulario.value;
    
    if(password === repeatPassword){
      this.authService.register(this.miFormulario.value).subscribe(res =>{
        if(res === true){
          localStorage.setItem("user", JSON.stringify(this.authService.user));
          this.router.navigateByUrl("/crud-news");
        }else{
          Swal.fire({
            title: "Error",
            text: res,
            icon: "error",
          });
        }      
      });
    }else{
      Swal.fire({
        title: "Error",
        text: "Las contraseñas no son iguales",
        icon: "error",
      });
    }
  }
}
