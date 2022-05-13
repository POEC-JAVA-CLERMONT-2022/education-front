import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountFormComponent } from './account-form/account-form.component';
import { LessonComponent } from './lesson/lesson.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  { path: 'account', component: AccountFormComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'lessons', component: LessonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }