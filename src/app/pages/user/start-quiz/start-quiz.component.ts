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


        this.calculateSubmitForBackend();



      }
    })
  }


  calculateSubmitForBackend(){
      this._questions.submitExam(this.question).subscribe(
        (data:any)=>{
          console.log(data);

          this.marksGot=parseFloat(Number(data.marksGot).toFixed(2));
          this.correctAnswer=data.correctAnswers;
          this.attempted=data.attempted;
          this.isSubmit=true;
        },
        (error)=>{
          console.log(error)
        }
      )
  }

  calculateSubmitForFrontEnd() {
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
        this.calculateSubmitForBackend();
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


  printPage(){
    window.print();
  }
}
