import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {



  quizzes=[
    {
      qid:21,
      title:"Loading....",
      description:'Loading...',
      maxMarks:'Loading...',
      numberOfQuestions:'loading....',
      active:'',
      category:{
        title:'Loading.....',
      },
    
   
    }
  ]
  constructor(private _quiz:QuizService) { }

  ngOnInit(): void {
    this._quiz.getQuizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !","Error to loading data",'error');
      }
    )
  }


  /**
   * deleteQuiz
   */
  deleteQuiz(qid:any) {
   Swal.fire({
     title:'Are you sure',
     confirmButtonText:'DELETE',
     showCancelButton:true,
     icon:'info'
   }).then((result)=>{
     if(result.isConfirmed){
      this._quiz.deleteQuizById(qid).subscribe(
        (data:any)=>{
          this.quizzes=this.quizzes.filter((quiz)=>quiz.qid != qid);
          
          Swal.fire("Success !","Quiz deleted successfully",'success');
         
  
        },
        (error:any)=>{
          console.log(error);
          Swal.fire("Error !","Quiz Delition operation faild",'error');
        }
      )
     }
   })
  }

}
