import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserLoggedIn = false;
  user = null;


  constructor(public loginService: LoginService,) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.loginService.isUserLoggedIn();
    this.user = this.loginService.getUserDetailsFromLocalStorage();

    this.loginService.loginStatusSubject.asObservable().subscribe(data => {
      this.isUserLoggedIn = this.loginService.isUserLoggedIn();
      this.user = this.loginService.getUserDetailsFromLocalStorage();

    });
  }

  public logout() {
    this.loginService.removeTokenFromStorage();
    this.isUserLoggedIn = false;
    this.user = null;

     this.loginService.loginStatusSubject.asObservable().subscribe(data => {
      this.isUserLoggedIn = this.loginService.isUserLoggedIn();
      this.user = this.loginService.getUserDetailsFromLocalStorage();

    });
  }

}
