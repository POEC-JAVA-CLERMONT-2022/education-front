import {HttpHeaders} from "@angular/common/http";

export class UrlApiConstantes {

  /** Header */
  static headers: {headers: HttpHeaders} = {
    headers: new HttpHeaders({
      'Content-Type': 'application/ld+json',
    })
  };

  /** SERVICES */
  static urlApi: string = 'http://localhost:8080';
  static urlApiLessons: string = '/lessons';
  static urlApiLessonID: string = '/lesson';

  static urlApiUsers: string = '/userList';
  static urlApiUserEmail: string = '/user';
  static urlApiUserID: string = '/account';

  }
