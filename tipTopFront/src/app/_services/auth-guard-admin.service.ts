import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService implements CanActivate{

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   const isAdmin = JSON.parse(localStorage.getItem("chaimae") || '{}');
   if(isAdmin != null) {
    if (isAdmin.role === "admin") {
      return true;      
    }
   } 
   //history.back();
   return false;
  }
}


