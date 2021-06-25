import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  constructor(private rout:ActivatedRoute
    ,private _quiz:QuizService) { }
  

  catId!: number;
    quizzess:any;

  ngOnInit(): void {
    
   
      //this subscription for every time will  run  onit when link will change
    this.rout.params.subscribe((params)=>{
      this.catId=params.catId;




      if(this.catId==0){
        //load all quiz
        this._quiz.getQuizzes().subscribe((data)=>{
          this.quizzess=data;

          
          
        },
        (error:any)=>{
            //error 
            alert("error in loading all quizzess")
        })

    }else{

      this.quizzess=null;
      console.log("load specific quiz")

      this._quiz.getQuizzessByCategory(this.catId).subscribe((data)=>{
        this.quizzess=data;

        
        
      },
      (error:any)=>{
          //error 
          alert("error in loading all quizzess")
      })

      
    }
    })


    
  }

}
