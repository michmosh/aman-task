import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {HttpService} from '../services/http.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  isAuthenticated : Boolean = false;
  constructor(private http: HttpService ,private router: Router) { }

  canActivate(){
    if(this.isAuthenticated){
      return true;
    }
    this.router.navigate(['/login'])
    return false;
  }
  login(postData){
    return this.http.login(postData).subscribe((res:any)=>{
      if(res.status === "loggedIn"){
        this.isAuthenticated = true;
        return this.router.navigate(['/jokes'])
      }
    })
  }
}
