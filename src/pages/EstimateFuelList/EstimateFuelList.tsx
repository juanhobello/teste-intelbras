import { useState } from "react";
import Table from "../../components/Table/Table";
import EstimateFuelForm from "../../forms/EstimateFuelForm/EstimateFuelForm";
import IconButton from "../../components/IconButton/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { columnsDefs } from "./config/columnsDefs";
import "./styles.css";
import generatorUUID from "../../utils/generatorUUID";

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

  const onSaveData = (value: FormProperties) => {
    if (value.id) {
      const dataEdit = data;
      dataEdit[value.id] = value;
      setData(dataEdit);
    } else {
      const id = generatorUUID();
      setData((prev) => ({ [id]: { ...value, id: id }, ...prev }));
    }
    setDataEditing(dataRow);
  };

  const onDeleteData = () => {
    const keysToDelete = selectRows;

    const newList = Object.fromEntries(
      Object.entries(data).filter(([key]) => !keysToDelete.includes(key))
    );

    setData(newList);
  };

  const onEditData = () => {
    const id = selectRows[0];

    setDataEditing(data[id]);
  };

  return (
    <div className="container">
      <EstimateFuelForm onSubmit={onSaveData} dataEdit={dataEditing} />
      <div className="header-edit-table">
        <IconButton
          onClick={onEditData}
          disabled={selectRows.length === 1 ? false : true}
        >
          <ModeEditOutlineOutlinedIcon />
        </IconButton>
        <IconButton onClick={onDeleteData} disabled={selectRows.length === 0}>
          <DeleteOutlinedIcon />
        </IconButton>
      </div>
      <Table
        columns={columnsDefs}
        rows={Object.values(data).reverse()}
        onRowSelectionModelChange={setSelectRows}
      />
    </div>
  );
};

export default EstimateFuelList;
