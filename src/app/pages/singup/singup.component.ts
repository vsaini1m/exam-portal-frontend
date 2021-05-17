import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private userService:UserService) {
     
   };

  public user={
    username:"",
    password:"",
    firstName:"",
    lastName:"",
    email:"",
    phone:""
  };
  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username=="" || this.user.username==null){    
      alert("user is required");
      return;
    }


    //user servuce

    this.userService.addUser(this.user).subscribe(
      (data)=>{
        console.log(data)
        alert("success");
      },
      (error)=>{

        console.log(error)
        alert("somethis went wrong");
      }
    )

  }

}
