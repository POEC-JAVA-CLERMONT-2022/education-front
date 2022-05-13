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

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get duration(): Date {
    return this._duration;
  }

  set duration(value: Date) {
    this._duration = value;
  }

  get modules(): Modulee[] {
    return this._modules;
  }

  set modules(value: Modulee[]) {
    this._modules = value;
  }
}
