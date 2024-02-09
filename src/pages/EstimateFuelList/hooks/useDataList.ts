import { useEffect, useState } from "react";
import generatorUUID from "../../../utils/generatorUUID";
import getDataLocalStorage from "../../../services/getDataLocalStorage";
import saveDataInLocalStorage from "../../../services/saveDataInLocalStorage";

export default function useDataList() {
  const [data, setData] = useState<object>({});

  useEffect(() => {
    const localStorage = getDataLocalStorage("listConsumption");
    if (localStorage) {
      setData(localStorage);
    }
  }, []);

  const add = (value: object) => {
    const id = generatorUUID();
    const dataEdit = { ...data, [id]: { ...value, id } };

    setData(dataEdit);
    saveDataInLocalStorage("listConsumption", dataEdit);
  };

  const edit = (id: string, value: object) => {
    const dataEdit = { ...data, [id]: { ...value, id } };

    setData(dataEdit);
    saveDataInLocalStorage("listConsumption", dataEdit);
  };

  const remove = (ids: Array<string>) => {
    const objectData: object = Object.fromEntries(
      Object.entries(data).filter(([key]) => !ids.includes(key))
    );

    setData(objectData);
    saveDataInLocalStorage("listConsumption", objectData);
  };

  const getDataEdit = (id: string) => {
    if (id) {
      const row = data[id];
      return row;
    }
  };

  return {
    data: Object.values(data).reverse(),
    add,
    edit,
    remove,
    getDataEdit,
  };
}
