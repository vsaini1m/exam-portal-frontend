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
    this.catId=this.rout.snapshot.params.catId;


    if(this.catId==0){
      //load all quiz
      this._quiz.getQuizzes().subscribe((data)=>{
        this.quizzess=data;

        console.log(this.quizzess)
        
      },
      (error:any)=>{
          //error 
          alert("error in loading all quizzess")
      })

    }else{
      console.log("load specific quiz")
    }
  }

}
