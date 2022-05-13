import {Video} from "./video";

export class Modulee {
  private _id: number = 0;
  private _title: string = '';
  private _video: Video;

  constructor() {
    this._video = new Video();
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

  get video(): Video {
    return this._video;
  }

  set video(value: Video) {
    this._video = value;
  }
}
