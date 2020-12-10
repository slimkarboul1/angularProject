import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/Models/option';
import { Question } from 'src/app/Models/question';
import { QuestionService } from 'src/app/Services/question.service';
import {Location} from '@angular/common'
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  listQuestions : Question[];
  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  duration = '';
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';

  mode ="quiz";
  allowBack =true;
  constructor(private questionService : QuestionService, private loc: Location) { }

  ngOnInit(): void {
    
    this.questionService.getQuestions().subscribe(
      (data:Question[]) => {this.listQuestions= data;
        console.log(this.listQuestions.length)
        this.pager.count = this.listQuestions.length;
      
      });
    
    this.startTime = new Date();
    this.ellapsedTime = '00:00';
    this.timer = setInterval(() => { this.tick(); }, 1000);
    this.duration = this.parseTime(300);
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= 300) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    return (this.listQuestions) ?
      this.listQuestions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }
  onSubmit() {
    let answers = [];
    this.listQuestions.forEach(x => answers.push({  'questionId': x.id, 'answered': x.answered }));

    // Post your data to the server here. answers contains the questionId and the users' answer.
    this.mode = 'result';
  }
  onSelect(question: Question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }
  GoBack(){
    this.loc.back();
  }
  
  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };
}
