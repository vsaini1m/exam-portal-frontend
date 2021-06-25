import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  /**
   * getQuizzes
   */
  public getQuizzes() {
    return this._http.get(`${baseUrl}/quiz/`)
  }

  /**
   * addNewQuiz
   */
  public addNewQuiz(quizData:any) {
    return this._http.post(`${baseUrl}/quiz/`,quizData);
  }

  /**
   * deleteQuizById
   */
  public deleteQuizById(qid:any) {
    return this._http.delete(`${baseUrl}/quiz/${qid}`);
  }


  /**
   * getQuizById
qid:any   */
  public getQuizById(qid:any) {
    return this._http.get(`${baseUrl}/quiz/${qid}`);
  }

  /**
   * updateQuiz
   */
  public updateQuiz(quiz:any) {
    return this._http.put(`${baseUrl}/quiz/`,quiz)
  }


  /**
   * getQuizzessByCategory
   */
  public getQuizzessByCategory(cid:any) {

    return this._http.get(`${baseUrl}/quiz/category/${cid}`)
    
  }
}
