import {Modulee} from "./modulee";

export class Video {
  private _id: number = 0;
  private _name: string = '';
  private _description: string = '';
  private _price: number = 0;
  private _level: string = '';
  private _language: string = '';
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

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get level(): string {
    return this._level;
  }

  set level(value: string) {
    this._level = value;
  }

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
  }

  get modules(): Modulee[] {
    return this._modules;
  }

  set modules(value: Modulee[]) {
    this._modules = value;
  }
}
