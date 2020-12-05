import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/Models/question';
import { QuestionService } from 'src/app/Services/question.service';

@Component({
  selector: 'app-manage-questions',
  templateUrl: './manage-questions.component.html',
  styleUrls: ['./manage-questions.component.css']
})
export class ManageQuestionsComponent implements OnInit {
searchName: string ='';
listQuestion: Question[];
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(
      (data:Question[]) =>this.listQuestion= data
    );
  }

  deleteQuestion(id){
     this.questionService.deleteQuestion(id).subscribe(
       () =>this.listQuestion = this.listQuestion.filter(question =>question.id != id)
     );     
  }

}
