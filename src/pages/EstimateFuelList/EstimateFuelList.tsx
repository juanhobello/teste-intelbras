import { useEffect, useState } from "react";
import Header from "../../layout/Header/Header";
import Main from "../../layout/Main/Main";
import Table from "../../components/Table/Table";
import IconButton from "../../components/IconButton/IconButton";
import EstimateFuelForm from "../../forms/EstimateFuelForm/EstimateFuelForm";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import TableLegend from "../../components/TableLegend/TableLegend";
import generatorUUID from "../../utils/generatorUUID";
import saveDataInLocalStorage from "../../services/saveDataInLocalStorage";
import getDataLocalStorage from "../../services/getDataLocalStorage";
import { columnsDefs } from "./config/columnsDefs";
import { DataObject, FormProperties } from "../../types/types";
import "./styles.css";

const dataFormDefault = {
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
  const [dataEditing, setDataEditing] =
    useState<FormProperties>(dataFormDefault);

  useEffect(() => {
    const localStorage = getDataLocalStorage("listConsumption");
    if (localStorage) {
      setData(localStorage);
    }

    return () => {};
  }, []);

  const onSaveData = (value: FormProperties) => {
    let dataEdit = data;

    if (value.id) {
      dataEdit = { ...dataEdit, [value.id]: { ...value, id: value.id } };
    } else {
      const id = generatorUUID();
      dataEdit = { ...dataEdit, [id]: { ...value, id } };
    }

    setDataEditing(dataFormDefault);
    setData(dataEdit);
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
          <div className="table-container">
            <Table
              columns={columnsDefs}
              rows={Object.values(data).reverse()}
              onRowSelectionModelChange={setSelectRows}
            />
          </div>
          <TableLegend />
        </div>
      </Main>
    </>
  );
};

export default EstimateFuelList;
