import { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import EstimateFuelForm from "../../forms/EstimateFuelForm/EstimateFuelForm";
import IconButton from "../../components/IconButton/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import generatorUUID from "../../utils/generatorUUID";
import { columnsDefs } from "./config/columnsDefs";
import "./styles.css";
import saveDataInLocalStorage from "../../services/saveDataInLocalStorage";
import getDataLocalStorage from "../../services/getDataLocalStorage";
import Main from "../../layout/Main/Main";
import Header from "../../layout/Header/Header";

interface FormProperties {
  id: string;
  licensePlate: string;
  model: string;
  tankCapacity: number;
  maximumLoad: number;
  averageConsumption: number;
  distanceTraveled: number;
  consumption: string;
}

interface DataObject {
  [key: string]: FormProperties;
}

const dataRow = {
  id: "",
  licensePlate: "",
  model: "",
  tankCapacity: 0,
  maximumLoad: 0,
  averageConsumption: 0,
  distanceTraveled: 0,
  consumption: "0",
};

const EstimateFuelList = () => {
  const [data, setData] = useState<DataObject>({});
  const [selectRows, setSelectRows] = useState<string[]>([]);
  const [dataEditing, setDataEditing] = useState<FormProperties>(dataRow);

  useEffect(() => {
    const localStorage = getDataLocalStorage("listConsumption");
    if (localStorage) {
      setData(localStorage);
    }

    return () => {};
  }, []);

  const onSaveData = (value: FormProperties) => {
    const dataEdit = data;

    if (value.id) {
      setData((prev) => ({ ...prev, [value.id]: { ...value, id: value.id } }));
    } else {
      const id = generatorUUID();
      setData((prev) => ({ ...prev, [id]: { ...value, id } }));
    }

    setDataEditing(dataRow);
    saveDataInLocalStorage("listConsumption", dataEdit);
  };

  const onDeleteData = () => {
    const keysToDelete = selectRows;

    const newList = Object.fromEntries(
      Object.entries(data).filter(([key]) => !keysToDelete.includes(key))
    );

    setData(newList);
    saveDataInLocalStorage("listConsumption", newList);
  };

  const onEditData = () => {
    const id = selectRows[0];

    setDataEditing(data[id]);
  };

  return (
    <>
      <Header />
      <Main>
        <div className="container">
          <EstimateFuelForm onSubmit={onSaveData} dataEdit={dataEditing} />
          <div className="header-edit-table">
            <IconButton
              onClick={onEditData}
              disabled={selectRows.length === 1 ? false : true}
            >
              <ModeEditOutlineOutlinedIcon />
            </IconButton>
            <IconButton
              onClick={onDeleteData}
              disabled={selectRows.length === 0}
            >
              <DeleteOutlinedIcon />
            </IconButton>
          </div>
          <Table
            columns={columnsDefs}
            rows={Object.values(data).reverse()}
            onRowSelectionModelChange={setSelectRows}
          />
        </div>
      </Main>
    </>
  );
};

export default EstimateFuelList;
