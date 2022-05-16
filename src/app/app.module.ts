import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LessonComponent } from './lesson/lesson.component';
import { ListLessonComponent } from './list-lesson/list-lesson.component';
import {HttpClientModule} from "@angular/common/http";
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountFormComponent,
    RegisterFormComponent,
    LessonComponent,
    ListLessonComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
