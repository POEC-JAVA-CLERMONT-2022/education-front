import {Time} from "@angular/common";
import {Modulee} from "./modulee";


export class Video {
  private _id: number = 0;
  private _title: string = '';
  private _url: string = '';
  private _duration: Date = new Date();
  private _modules: Modulee [];


  constructor() {
    this._modules = [];
  }
}
