import { makeAutoObservable } from "mobx";

export interface IType {
  id: number;
  name: string;
}

export interface IBrand {
  id: number;
  name: string;
}

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  brandId: number;
  typeId: number;
}

export default class DeviceStore {
  private _types: IType[];
  private _brands: IBrand[];
  private _devices: IDevice[];
  private _selectedType: IType | null;
  private _selectedBrand: null | IBrand;
  private _page: number;
  private _totalCount: number;
  private _limit: number;
  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = null;
    this._selectedBrand = null;
    this._page = 1;
    this._totalCount = 0;
    this._limit = 4;
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
  setSelectedType(type: IType | null) {
    this.setPage(1);
    this._selectedType = type;
  }
  setSelectedBrand(brand: IBrand | null) {
    this.setPage(1);
    this._selectedBrand = brand;
  }
  setPage(page: number) {
    this._page = page;
  }
  setTotalCount(count: number) {
    this._totalCount = count;
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
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
  get page() {
    return this._page;
  }
  get totalCount() {
    return this._totalCount;
  }
  get limit() {
    return this._limit;
  }
}
