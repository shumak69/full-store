import { makeAutoObservable } from "mobx";
import { IDevice } from "./DeviceStore";

export default class UserStore {
  private _basketItems: IDevice[];
  constructor() {
    this._basketItems = [];
    makeAutoObservable(this);
  }

  setBasketItems(device: IDevice) {
    this._basketItems.push(device);
  }

  get basketItems() {
    return this._basketItems;
  }
}
