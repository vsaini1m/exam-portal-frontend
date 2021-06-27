import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prestart-quiz',
  templateUrl: './prestart-quiz.component.html',
  styleUrls: ['./prestart-quiz.component.css']
})
export class PrestartQuizComponent implements OnInit {

  constructor(private _rout:ActivatedRoute,
    private _quiz:QuizService,
    private _router:Router) { }

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
/**
 * startQuiz
 */
public startQuiz() {

  Swal.fire({
    title:'Do you want to start Test',
    showCancelButton:true,
    confirmButtonText:"Yes, Start quiz"
  }).then((result)=>{
    if(result.isConfirmed){
      this._router.navigate(["/start/"+this.qid])
      
    }
  })
  
}

  

}
