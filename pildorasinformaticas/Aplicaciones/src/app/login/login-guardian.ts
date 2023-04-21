import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuardian implements CanActivate {

    // Inyectamos lo necesario
    constructor(private router: Router, private loginService:LoginService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        if (this.loginService.estaLogueado()) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
    
}