import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;

  constructor( private auth: AuthService,
               private _routes: Router) { 
  }

  ngOnInit(): void {

    this.usuario = new UsuarioModel();
  }//

  login( form: NgForm ) {

    if( form.invalid) {
       return;
      }
    Swal.fire({
        icon: 'success',
        title: 'Welcome ' + this.usuario.email,
        showConfirmButton: false,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        }
      });

    this.auth.LogIn( this.usuario ).subscribe(
      resp =>{
        Swal.close();
        this._routes.navigateByUrl('/home');

      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: error.error.error.message,
          text: 'Something went wrong!',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
        });
      });

  }//

}
