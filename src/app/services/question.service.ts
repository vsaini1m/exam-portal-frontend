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
    return this._http.get(`${baseUrl}/question/questions/`+qid);
  }
}
