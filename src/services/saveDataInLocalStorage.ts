type FormProperties = {
  id: string;
  licensePlate: string;
  model: string;
  tankCapacity: number;
  maximumLoad: number;
  averageConsumption: number;
  distanceTraveled: number;
  consumption: string;
};

interface DataObject {
  [key: string]: FormProperties;
}

export default function saveDataInLocalStorage(
  keyName: string,
  data: DataObject
) {
  try {
    localStorage.setItem(keyName, JSON.stringify(data));
  } catch (error) {
    console.error(`Erro: ${error}`);
  }
}
