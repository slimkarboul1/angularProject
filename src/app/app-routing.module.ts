import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './Components/add-question/add-question.component';
import { HomeComponent } from './Components/home/home.component';
import { ManageQuestionsComponent } from './Components/manage-questions/manage-questions.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { QuizComponent } from './Components/quiz/quiz.component';
import { UpdateQuestionComponent } from './Components/update-question/update-question.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"manageQuestions", component:ManageQuestionsComponent},
  {path: "addQuestion", component:AddQuestionComponent},
  {path:"quiz", component: QuizComponent},
  {path: 'updateQuestion/:id', component:UpdateQuestionComponent},
 // { path: '',   redirectTo: '/home', pathMatch: 'full' }
//  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
