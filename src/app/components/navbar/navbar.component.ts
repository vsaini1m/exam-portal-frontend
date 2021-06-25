import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserLoggedIn = false;
  user = null;


  constructor(public loginService: LoginService,private _bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
  
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
@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
  styleUrls: ['./navbar.component.css']
})
export class BottomSheetOverviewExampleSheet{
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {
   
    
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}