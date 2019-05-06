import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  NavigationExtras
}                           from '@angular/router';
import { SigninService }      from 'src/app/services/signin.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private signinService: SigninService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log('AuthGuard#canActivate called');
    console.log(route, state);
    // check auth
    return true;
  }
  
  // checkLogin(url: string): boolean {
  //   if (this.signinService.isLoggedIn) { return true; }

  //   // Store the attempted URL for redirecting
  //   this.signinService.redirectUrl = url;

  //   // Create a dummy session id
  //   let sessionId = 123456789;

  //   // Set our navigation extras object
  //   // that contains our global query params and fragment
  //   let navigationExtras: NavigationExtras = {
  //     queryParams: { 'session_id': sessionId },
  //     fragment: 'anchor'
  //   };

  //   // Navigate to the login page with extras
  //   this.router.navigate(['/login'], navigationExtras);
  //   return false;
  // }
}
