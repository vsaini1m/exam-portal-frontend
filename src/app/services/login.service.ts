import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import baseUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
public loginStatusSubject=new Subject<boolean>();
  constructor(private http:HttpClient,private router:Router) { }

public getCurrentUser() {
  return this.http.get(`${baseUrl}/current-user`);
}


//genrate token
  public genrateToken(loginData:any) {
    return this.http.post(`${baseUrl}/genrate-token`,loginData)
  }

  /**
   * loginUser store token localStorage
   */
  public loginUser(token:any) {
    localStorage.setItem("token",token);
    
    return true;
  }


  /**
   * isUserLoggedIn ornot
   */
  public isUserLoggedIn() {
    let tokenStr=localStorage.getItem("token");

    if(tokenStr==undefined || tokenStr=='' || tokenStr==null){
      return false;
    }else{
      return true;
    }
  }


/**
 * removeTokenFromStorage
 */
public removeTokenFromStorage() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  this.router.navigate(['login']);
  return true;
}

/**
 * getTokenFromLocalStorage
 */
public getTokenFromLocalStorage() {
  return localStorage.getItem("token");
}


/**
 * setUserDetailsLocalStorage
User */
public setUserDetailsLocalStorage(user:any) {
  localStorage.setItem("user",JSON.stringify(user));
}

/**
 * getUserDetailsFromLocalStorage
 */
public getUserDetailsFromLocalStorage() {
  let userStr=localStorage.getItem("user");

  if(userStr!=null){
    return JSON.parse(userStr);
  }else{
    this.removeTokenFromStorage();
    return null;
  }
}


/**
 * getUserRole
 */
public getUserRole() {
  let user=this.getUserDetailsFromLocalStorage();

  return user.authorities[0].authority;

}



}
