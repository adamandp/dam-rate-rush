interface WebResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

interface ProvinceResponse {
  id: number;
  name: string;
}

interface CityResponse {
  id: number;
  name: string;
  type: string;
}

interface DistrictResponse {
  id: string;
  name: string;
}

interface SubdistrictResponse {
  id: string;
  name: string;
  zip: number;
}

interface ComboboxValue {
  value: string | number;
  label: string;
}

interface ShippingMeta {
  message: string;
  code: number;
  status: string;
}

export interface ShippingData {
  name: string;
  code: string;
  service: string;
  description: string;
  cost: number;
  etd: string;
}

export interface ShippingResponse {
  meta: ShippingMeta;
  data: ShippingData[];
}

export type {
  WebResponse,
  ProvinceResponse,
  CityResponse,
  DistrictResponse,
  SubdistrictResponse,
  ComboboxValue,
};
