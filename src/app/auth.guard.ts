import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,private userService:UserService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(sessionStorage.getItem('email') != null 
       && sessionStorage.getItem('email') != undefined 
       && sessionStorage.getItem('email') != '') {
         console.log(sessionStorage.getItem('email'));
         console.log('Inside true auth');
        return true;
       }
        else
        {
          this.userService.setLoginMessege("Please login to continue..");
         this.router.navigate(['login']);
        return false;
       }
    
  }
}
