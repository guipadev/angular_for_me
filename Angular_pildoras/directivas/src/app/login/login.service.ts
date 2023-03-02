import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {

  token!:string;

  // Inyectamos router y servicio cookies
  constructor(private router:Router, private cookies:CookieService) { }


  login(email:string, password:string) {

    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => { 
        firebase.auth().currentUser?.getIdToken()?.then(
          token => {
            // obtener el token
            this.token = token;
            
            // Obtener y almacenar cookie
            this.cookies.set("token", this.token);
            
            // retornar luego al inicio
            this.router.navigate(['/home']);
          }
        )
      }
    )
  }

  getIdToken() {
    // return this.token;
    // Obtener rescatar el valor del token en la cookie
    return this.cookies.get("token");
  }

  estaLogueado() {
    // validar token
    // console.log(this.token);
    // return this.token;
    return this.cookies.get("token");
  }

  logout() {
    
    firebase.auth().signOut().then(() => {
      // Asignar valor vacio, cambiar estado a logout
      this.token = "";

      // Obtener el nuevo valor asignado del token
      this.cookies.set("token", this.token);

      this.router.navigate(['/']);

      // actualizar pagina
      window.location.reload();
    })
  }
}
