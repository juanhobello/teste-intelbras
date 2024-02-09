/*eslint-disable*/
import { useState } from "react";
import Header from "../../layout/Header/Header";
import Main from "../../layout/Main/Main";
import Table from "../../components/Table/Table";
import IconButton from "../../components/IconButton/IconButton";
import EstimateFuelForm from "../../forms/EstimateFuelForm/EstimateFuelForm";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import TableLegend from "../../components/TableLegend/TableLegend";
import { columnsDefs } from "./config/columnsDefs";
import { FormProperties } from "../../types/types";
import useDataList from "./hooks/useDataList";
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
  const { data, add, edit, remove, getDataEdit } = useDataList();
  const [selectRows, setSelectRows] = useState<string[]>([]);
  const [dataEditing, setDataEditing] =
    useState<FormProperties>(dataFormDefault);

  const onSaveData = (value: FormProperties) => {
    if (value.id) {
      edit(value.id, value);
      setDataEditing(dataFormDefault);
    } else {
      add(value);
    }
  };

  const onDeleteData = () => {
    remove(selectRows);
  };

  const handleEditData = () => {
    const [id] = selectRows;
    const dataEdit = getDataEdit(id);
    setDataEditing(dataEdit);
  };

  return (
    <>
      <Header />
      <Main>
        <div className="container">
          <EstimateFuelForm onSubmited={onSaveData} dataEdit={dataEditing} />
          <div className="header-edit-table">
            <div>
              <IconButton
                onClick={handleEditData}
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
          </div>
          <div className="table-area">
            <Table
              columns={columnsDefs}
              rows={data}
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
