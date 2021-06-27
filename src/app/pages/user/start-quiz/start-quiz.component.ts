import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  constructor(private _rout:ActivatedRoute,
    private _locationSta:LocationStrategy) { }

  qid:any;

  ngOnInit(): void {

   this.qid=this._rout.snapshot.params.qid;

     this.blockBackButton();
  }


  blockBackButton(){
    history.pushState(null,'',location.href);

    this._locationSta.onPopState(()=>{
      history.pushState(null,'',location.href);
    })
  }


}
