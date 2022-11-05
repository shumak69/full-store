import { makeAutoObservable } from "mobx";
import { IUser, ROLE } from "../types/user";

export default class UserStore {
  private _isAuth: boolean;
  private _user: {};
  private _role: null | ROLE;
  constructor() {
    this._isAuth = false;
    this._role = null;
    this._user = {};
    makeAutoObservable(this);
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }
  setUser(user: IUser | {}) {
    this._user = user;
  }
  setRole(role: ROLE | null) {
    this._role = role;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
  get role() {
    return this._role;
  }
}
