import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



import { Question } from '../Models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
Url = 'http://localhost:3000/questions/';
  constructor(private http : HttpClient) { }

  getQuestions(){
    return this.http.get<Question[]>(this.Url);
  }

  deleteQuestion(id){
    return this.http.delete(this.Url+id);
  }

  addQuestion(q: Question){
    return this.http.post(this.Url,q);
  }

  getQueustionById(id)
  {
    return this.http.get<Question>(this.Url+id);
  }
  updateQuestion(q: Question,id){
    return this.http.put(this.Url+id,q);
  }
}

