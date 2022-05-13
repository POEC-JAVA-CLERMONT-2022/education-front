import {Modulee} from "./modulee";
import {Role} from "./role";

export class Video {
  private _id: number = 0;
  private _firstName: string = '';
  private _lastName: string = '';
  private _birthAt: Date = new Date();
  private _urlImage: string = '';
  private _email: string = '';
  private _password: string = '';
  private _status: string = '';
  private _roles: Role [];

  constructor() {
    this._roles = [];
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get birthAt(): Date {
    return this._birthAt;
  }

  set birthAt(value: Date) {
    this._birthAt = value;
  }

  get urlImage(): string {
    return this._urlImage;
  }

  set urlImage(value: string) {
    this._urlImage = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get roles(): Role[] {
    return this._roles;
  }

  set roles(value: Role[]) {
    this._roles = value;
  }
}
