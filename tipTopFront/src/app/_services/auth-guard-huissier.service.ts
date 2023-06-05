import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardHuissierService implements CanActivate{

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isAdmin = JSON.parse(localStorage.getItem("chaimae") || '{}');
    if(isAdmin != null) {
     if (isAdmin.role === "huissier") {
       return true;      
     }
    } 
    history.back();
    return false;
   }
}
