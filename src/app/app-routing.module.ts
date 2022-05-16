import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountFormComponent } from './account-form/account-form.component';
import { LessonComponent } from './lesson/lesson.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import {ListLessonComponent} from "./list-lesson/list-lesson.component";

const routes: Routes = [
  { path: 'login', component: AccountFormComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'lesson', component: LessonComponent },
  { path: 'lessonList', component: ListLessonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
