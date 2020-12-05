import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Option } from 'src/app/Models/option';
import { Question } from 'src/app/Models/question';
import { QuestionService } from 'src/app/Services/question.service';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
 question : Question;
 option : Option;
 Listoptions : Option[];

 questionForm: FormGroup;
 Choices = [true, false];

 questionId :number;

  constructor(private fb: FormBuilder, private questionservice: QuestionService) { }

  ngOnInit(): void {
    this.question = new Question();
    this.Listoptions =[];
    this.questionForm = this.fb.group({
      name: new FormControl("",[Validators.required,Validators.minLength(10)]),
      id: new FormControl('',[Validators.required]),

      options: this.fb.array([ this.buildOption()])
      })
    console.log(this.questionForm);
    
    }
    
  

  buildOption() : FormGroup{
    return  this.fb.group({
      id :new FormControl('',[Validators.required]),
      questionId : new FormControl('',[Validators.required]),
      name :new FormControl('',[Validators.required,Validators.minLength(5)]),
      isAnswer : new FormControl('',[Validators.required])
    })
  }

  get getOptions()
  {
      return this.questionForm.get('options') as FormArray;  
  }

  addOptions(){
    this.getOptions.push( this.buildOption());
  }



  AddQuestion(){
    this.question.questionTypeId=1;
    this.question.id=this.questionForm.get('id').value;
    this.question.name = this.questionForm.get('name').value;
    this.question.options = this.questionForm.get('options').value;
    console.log(this.question);
    this.questionservice.addQuestion(this.question).subscribe();
  }

}
