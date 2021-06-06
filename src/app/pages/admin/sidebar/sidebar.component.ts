import { Component, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private loginService:LoginService) { }
  


  ngOnInit(): void {
  }


  /**
   * logout
   */
 
    public logout() {
    
    }
    
  
}
