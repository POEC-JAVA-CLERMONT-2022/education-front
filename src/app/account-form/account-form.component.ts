import { Component, OnInit } from '@angular/core';
import {HttpLessonService} from "../../services/lesson.service";
import {HttpUserService} from "../../services/user.service";
import {Lesson} from "../../models/lesson";
import {User} from "../../models/user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  paramEmail: string|undefined;
  users: Array<User> = [];
  user: User|undefined;

  constructor(private httpUser: HttpUserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   /* this.activatedRoute.params.subscribe((params) => {
      this.paramEmail=params.email;
      if(this.paramEmail) {
        this.httpUser.getUserByEmail(this.paramEmail).subscribe((user) => {
          this.user = user;
        });
        }
      }); */
  }



}
