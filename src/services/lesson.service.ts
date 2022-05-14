import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UrlApiConstantes} from "./url-api-constantes";
import {Lesson} from "../models/lesson";

@Injectable({
  providedIn: 'root'
})
export class HttpLessonService {

  constructor(private  httpClient: HttpClient) { }

  getLessons(): Observable<Array<Lesson>>{
    console.log(UrlApiConstantes.urlApi+UrlApiConstantes.urlApiLessons);
    return this.httpClient.get<Array<Lesson>>(UrlApiConstantes.urlApi+UrlApiConstantes.urlApiLessons);
  }

  getLessonsById(id: string): Observable<Lesson> {
    console.log(UrlApiConstantes.urlApiLessonID + id);
    return this.httpClient.get<Lesson>(UrlApiConstantes.urlApiLessonID + id);
  }
}
