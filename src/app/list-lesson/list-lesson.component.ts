import { Component, OnInit } from '@angular/core';
import {HttpLessonService} from "../../services/lesson.service";
import {Lesson} from "../../models/lesson";

@Component({
  selector: 'app-list-lesson',
  templateUrl: './list-lesson.component.html',
  styleUrls: ['./list-lesson.component.scss']
})
export class ListLessonComponent implements OnInit {
  lessons: Array<Lesson> =[];

  constructor(private httpLessonService: HttpLessonService) { }

  ngOnInit(): void {
    this.httpLessonService.getLessons().subscribe((jsonLesson)=>{
        this.lessons= jsonLesson;
        console.log(jsonLesson);
    });
  }

}
