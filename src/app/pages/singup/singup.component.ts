import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor() { }

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

    
  }

}
