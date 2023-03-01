import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable()
export class LoginService {

  token!:string;

  constructor(private router:Router) { }


  login(email:string, password:string) {

    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => { 
        firebase.auth().currentUser?.getIdToken()?.then(
          token => {
            // obtener el token
            this.token = token;
            // retornar luego al inicio
            this.router.navigate(['/home']);
          }
        )
      }
    )
  }

  getIdToken() {
    return this.token;
  }

}
