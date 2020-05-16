import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsauthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router,
  ){  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if ( this.authService.isLoggedIn ){
        if ( JSON.parse(localStorage.getItem('userData')).status == 'user'){
          this.router.navigate(['user/home']);
        }else 
        if (JSON.parse(localStorage.getItem('userData')).status == 'carrier'){
          this.router.navigate(['carrier/profile']);
        }else
        if (JSON.parse(localStorage.getItem('userData')).status == 'admin'){
          this.router.navigate(['admin/orders'])
        }
      } 
    return true;
  }
  
}
