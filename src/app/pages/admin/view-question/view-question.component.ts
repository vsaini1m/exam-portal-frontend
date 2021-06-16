import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {

  constructor(private _rout:ActivatedRoute
    ,private _question:QuestionService,
    private _router:Router) { }

  qid= "";
  qtitle="";
  question=[{
    quesId:'',
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  }];

  ngOnInit(): void {
   
   this.qid=this._rout.snapshot.params.qid;
   this.qtitle=this._rout.snapshot.params.qtitle;

   this._question.getQuestionsByQuiz(this.qid).subscribe((data:any)=>{
    

     this.question=data;

     console.log(this.question);
   },
   (error)=>{
     console.log(error)
   })



  }


  delete(quesId:any){
   
    Swal.fire({
      title:'Are you sure want to delete',
      confirmButtonText:'Yes Delete',
      showCancelButton:true,
      icon:'info'
    }).then((result)=>{
      if(result.isConfirmed){
        this._question.deleteQuestion(quesId).subscribe((data:any)=>{
         

          
         this.question= this.question.filter((question:any)=>question.quesId!=quesId);
        },
        (error:any)=>{
          console.log(error)
        
      })
      }
    })
   
   
   

}
}
