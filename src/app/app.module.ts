import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LessonComponent } from './lesson/lesson.component';
import { ListLessonComponent } from './list-lesson/list-lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountFormComponent,
    RegisterFormComponent,
    LessonComponent,
    ListLessonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
