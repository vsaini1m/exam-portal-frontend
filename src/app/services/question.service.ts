import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }


  /**
   * getQuestionsByQuiz
   */
  public getQuestionsByQuiz(qid:any) {
    return this._http.get(`${baseUrl}/question/questions/all/`+qid);
  }

  /**
   * addQuestion
   */
  public addQuestion(question:any) {
    return this._http.post(`${baseUrl}/question/`,question);
  }
}
