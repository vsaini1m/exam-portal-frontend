import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  constructor(private _rout: ActivatedRoute,
    private _locationSta: LocationStrategy,
    private _questions: QuestionService) { }

  qid = 0;
  question: any;

  marksGot = 0;
  correctAnswer = 0;
  attempted = 0;

  isSubmit = false;
  timer: any;






  ngOnInit(): void {

    this.qid = this._rout.snapshot.params.qid;

    this.blockBackButton();

    this.loadQuiz();



  






  }

  /**
   * loadQuiz
   */
  public loadQuiz() {
    this._questions.getQuestionsByQuizforUser(this.qid).subscribe((data) => {



      this.question = data;

      //time calculate
      this.timer = this.question.length * 2 * 60;

      this.countdown();

      this.question.forEach((q: any) => {
        q['givenAnswer'] = '';
      });



    },

      (error) => {
        console.log(error)
      })

  }

  blockBackButton() {
    history.pushState(null, '', location.href);

    this._locationSta.onPopState(() => {
      history.pushState(null, '', location.href);
    })
  }



  submitQuiz() {
    Swal.fire({
      title: 'Do you want to start Submit ?',
      showCancelButton: true,
      confirmButtonText: "Yes, Submit",
      icon: 'info'
    }).then((result) => {
      if (result.isConfirmed) {


        this.calculateSubmit();



      }
    })
  }




  calculateSubmit() {
    this.isSubmit = true;
    this.question.forEach((q: any) => {


      if (q.givenAnswer == q.answer) {
        this.correctAnswer++;

        let marksCurrent = this.question[0].quiz.maxMax / this.question.length;

        this.marksGot += marksCurrent;


      }

      if (q.givenAnswer.trim() != '') {
        this.attempted++;
      }




    });
  }


  countdown(){
   let t:any= window.setInterval(()=>{
      if(this.timer<=0){
        this.calculateSubmit();
        clearInterval(t);
      }else{
        this.timer--;
      }
    },1000)
  }


  formatTime(){
    let m=Math.floor(this.timer/60);

    let s=this.timer-m*60;
    return `${m} min : ${s} sec.`
  }

}
