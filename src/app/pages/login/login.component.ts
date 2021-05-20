import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData={
    username:'',
    password:''
  };


  constructor(private snack:MatSnackBar,private loginService:LoginService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("login form submitted");

    if(this.loginData.username.trim()=='' || this.loginData.username==null){

      this.snack.open("User name is required","",{
        duration:3000,
      });
      return;
    }
      if(this.loginData.password.trim()=='' || this.loginData.password==null){

        this.snack.open("Password is required","",{
          duration:3000,
        });
        return;
    }

    this.loginService.genrateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("Successfull.. ");
        console.log(data);
      },
      (error)=>{
        console.log(error);
       console.log("Error !-");

      }
    )

  }

}
