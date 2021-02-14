import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: UsuarioModel;


  constructor( private auth: AuthService,
               private _routes: Router) { }

  ngOnInit(): void {

    this.usuario = new UsuarioModel();
  }

  onSubmit(formu: NgForm ) {

    if (formu.invalid) {
      return;
    }

    Swal.fire({
      icon: 'success',
      title: this.usuario.email + ' register success',
      showConfirmButton: false,
      timer: 1500,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      }
    });

    this.auth.SignUp(this.usuario ).subscribe( resp => {
      // console.log(resp);
        Swal.close();
        this._routes.navigateByUrl('/home');

    }, ( error ) => {

        Swal.fire({
          icon: 'error',
          title: error.error.error.message,
          text: 'Something went wrong!',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
        });

    });

  }

}
