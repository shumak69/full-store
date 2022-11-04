import { IDevice } from "../store/DeviceStore";

export interface IDeviceInfo {
  id?: number;
  title: string;
  description: string;
  number?: number;
}

export interface IFetchDevices {
  count: number;
  rows: IDevice[];
}

export type IDevicePage = { info: IDeviceInfo[] } & IDevice;
