import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private api = 'AIzaSyBaLZnkbdLc77kLu_3MdCl0Yb9dIFuqIEA';
  public tokken: string;

  constructor( private http: HttpClient) {

    this.readTokken();
  }

  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  SignUp( usuario: UsuarioModel ){

    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
    return this.http.post( `${ this.url }signUp?key=${ this.api }`, authData)
                    .pipe( map( resp =>{
                      this.saveToken( resp['idToken']);
                      return resp;
                    }));
  }

// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  LogIn( usuario: UsuarioModel){

    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post( `${ this.url }signInWithPassword?key=${ this.api }`, authData)
                    .pipe( map( resp =>{
                      this.saveToken( resp['idToken']);
                      return resp;
                    }));

  }

  logOut() {
    localStorage.removeItem('tokken');
  }//



  saveToken( idTokken: string) {

    this.tokken = idTokken;
    localStorage.setItem('tokken', idTokken);
  }//



  readTokken() {

    if(localStorage.getItem('tokken')){
      this.tokken = localStorage.getItem('tokken');
    } else {
      this.tokken = '';
    }
    return this.tokken;
  }//


  

  authenticado(): boolean {

    return this.tokken.length > 2;
  }//

}


