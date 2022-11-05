import { authHost, host } from ".";
import { IBrand, IType } from "../store/DeviceStore";
import { IFetchDevices } from "../types/device";

export const createType = async (type: { name: string }) => {
  const { data } = await authHost.post("type", type);
  return data;
};
export const fetchTypes = async () => {
  const { data } = await host.get<IType[]>("type");
  return data;
};

export const createBrand = async (brand: { name: string }) => {
  const { data } = await authHost.post("brand", brand);
  return data;
};
export const fetchBrands = async () => {
  const { data } = await host.get<IBrand[]>("brand");
  return data;
};

export const createDevice = async (device: FormData) => {
  const { data } = await authHost.post("device", device);
  return data;
};

type typeId = number | undefined | null;

export const fetchDevices = async (typeId: typeId, brandId: typeId, page: number, limit = 4) => {
  const { data } = await host.get<IFetchDevices>("device", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};
export const fetchOneDevice = async (id: number) => {
  const { data } = await host.get(`device/${id}`);
  return data;
};
