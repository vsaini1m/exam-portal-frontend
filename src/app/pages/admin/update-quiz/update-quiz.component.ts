import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
qid='0';
  constructor(private _rout:ActivatedRoute,
    private _quiz:QuizService,
    private _category:CategoryService,
    private _router:Router

    ) { }

    category=[
      {
        cid:0,
        title:'Loading... ',
        description:'Loading... '
        
      }];

    quizData={
      id:'',
      title:'',
      description:'',
      maxMax:'',
      numberOfQuestion:'',
      active:false,
      category:{
        cid:''
      }
    };

  ngOnInit(): void {
    this.qid=this._rout.snapshot.params.qid;
    

    this._quiz.getQuizById(this.qid).subscribe(
      (data:any)=>{
        this.quizData=data;
        console.log(this.quizData);
      }
    ),
    (error:any)=>{
      //quiz not ound

      console.log("quiz not found");
    }
    this._category.categories().subscribe((data:any)=>{
      this.category=data;
      console.log(this.category);
    },
    (error:any)=>{
      console.log(error);
      Swal.fire("Error !!","Error in loading data ",'error');
    }
    )
  }
  

public formSubmit() {
  this._quiz.updateQuiz(this.quizData).subscribe(
    (data:any)=>{
      Swal.fire("Updated !!","Quiz updated successfully ",'success').then(
        (e)=>{
          this._router.navigate(['/admin/quizzes']);
        }
      );
    }
  ),
  (error:any)=>{
    Swal.fire("Error !!","Quiz updated faild ",'error');
  }
}

  }


 