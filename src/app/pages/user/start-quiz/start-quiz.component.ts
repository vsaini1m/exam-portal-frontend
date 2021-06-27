import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  constructor(private _rout:ActivatedRoute,
    private _locationSta:LocationStrategy,
    private _questions:QuestionService) { }

  qid=0;
  question:any;

  ngOnInit(): void {

   this.qid=this._rout.snapshot.params.qid;

     this.blockBackButton();

     this._questions.getQuestionsByQuizforUser(this.qid).subscribe((data)=>{



      this.question=data;
      console.log(data)

     },
     
     (error)=>{
      console.log(error)
     })
  }


  blockBackButton(){
    history.pushState(null,'',location.href);

    this._locationSta.onPopState(()=>{
      history.pushState(null,'',location.href);
    })
  }


}
