export interface FormProperties {
  id: string;
  licensePlate: string;
  model: string;
  tankCapacity: number;
  maximumLoad: number;
  averageConsumption: number;
  distanceTraveled: number;
  consumption: string;
}

export interface DataObject {
  [key: string]: FormProperties;
}
