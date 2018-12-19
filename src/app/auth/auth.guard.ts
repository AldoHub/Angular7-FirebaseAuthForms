import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import { tap, map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.user.pipe(
     take(1),
     map(user => !!user),
     tap(logged => {
       if(!logged){
         console.log("User not Authenticated")
         this.router.navigate(["/"])
        }
     })
    ) 
  }
}
