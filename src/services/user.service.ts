import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Lesson} from "../models/lesson";
import {UrlApiConstantes} from "./url-api-constantes";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class HttpUserService {

  constructor(private  httpClient: HttpClient) { }

  getUsers(): Observable<Array<User>>{
    console.log(UrlApiConstantes.urlApi+UrlApiConstantes.urlApiUsers);
    return this.httpClient.get<Array<User>>(UrlApiConstantes.urlApi+UrlApiConstantes.urlApiUsers);
  }

  getUserByID(id: string): Observable<User> {
    console.log(UrlApiConstantes.urlApiUserID + id);
    return this.httpClient.get<User>(UrlApiConstantes.urlApiUserID + id);
  }

  getUserByEmail(email: string): Observable<User> {
    console.log(UrlApiConstantes.urlApiUserEmail + email);
    return this.httpClient.get<User>(UrlApiConstantes.urlApiUserEmail + email);
  }
}
