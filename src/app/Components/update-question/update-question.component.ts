import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/Models/option';
import { Question } from 'src/app/Models/question';
import { QuestionService } from 'src/app/Services/question.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  questionId : number;
  question : Question;
  option: Option;
  Choices = [true, false];


  constructor(private quesitonService : QuestionService, private routeService : ActivatedRoute) { }

  ngOnInit(): void {
    this.question = new Question();
    this.questionId = this.routeService.snapshot.params.id;
     this.quesitonService.getQueustionById(this.questionId).subscribe(
      (data:Question) => this.question= data
     );
  }

  updateQuestion(id){
    this.quesitonService.updateQuestion(this.question,id).subscribe();

  }


}
