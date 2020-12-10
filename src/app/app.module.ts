import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { AddQuestionComponent } from './Components/add-question/add-question.component';
import { QuizComponent } from './Components/quiz/quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManageQuestionsComponent } from './Components/manage-questions/manage-questions.component';
import { UpdateQuestionComponent } from './Components/update-question/update-question.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { questionFilter } from './filter/question-filter';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddQuestionComponent,
    QuizComponent,
    ManageQuestionsComponent,
    UpdateQuestionComponent,
    PageNotFoundComponent,
    questionFilter,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
