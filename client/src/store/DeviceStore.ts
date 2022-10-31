import { makeAutoObservable } from "mobx";

interface IType {
  id: number;
  name: string;
}

interface IBrand {
  id: number;
  name: string;
}

interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

export default class DeviceStore {
  private _types: IType[];
  private _brands: IBrand[];
  private _devices: IDevice[];
  constructor() {
    this._types = [
      { id: 1, name: "Холодильник" },
      { id: 2, name: "Смарфоны" },
    ];
    this._brands = [
      { id: 1, name: "Apple" },
      { id: 2, name: "Samsung" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://apiua.icoola.ua/aimeos/1.d/preview/b/d/bddb59eb_apple-iphone-12-pro-256gb-blue-icoola-1.jpg",
      },
      {
        id: 2,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://apiua.icoola.ua/aimeos/1.d/preview/b/d/bddb59eb_apple-iphone-12-pro-256gb-blue-icoola-1.jpg",
      },
      {
        id: 3,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://apiua.icoola.ua/aimeos/1.d/preview/b/d/bddb59eb_apple-iphone-12-pro-256gb-blue-icoola-1.jpg",
      },
      {
        id: 4,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://apiua.icoola.ua/aimeos/1.d/preview/b/d/bddb59eb_apple-iphone-12-pro-256gb-blue-icoola-1.jpg",
      },
      {
        id: 5,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://apiua.icoola.ua/aimeos/1.d/preview/b/d/bddb59eb_apple-iphone-12-pro-256gb-blue-icoola-1.jpg",
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types: IType[]) {
    this._types = types;
  }
  setBrands(brands: IBrand[]) {
    this._brands = brands;
  }
  setDevices(devices: IDevice[]) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}
