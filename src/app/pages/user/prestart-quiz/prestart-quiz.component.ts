import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-prestart-quiz',
  templateUrl: './prestart-quiz.component.html',
  styleUrls: ['./prestart-quiz.component.css']
})
export class PrestartQuizComponent implements OnInit {

  constructor(private _rout:ActivatedRoute,
    private _quiz:QuizService) { }

  qid:any;

  quiz:any;
  ngOnInit(): void {

    this.qid=this._rout.snapshot.params.qid;

   this._quiz.getQuizById(this.qid).subscribe((data=>{
    this.quiz=data;
console.log(data)

   }),
   (error)=>{
     console.log("faild to load quiz")
   }
   )



  }

}
