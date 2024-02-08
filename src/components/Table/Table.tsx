import {
  DataGrid,
  GridColDef,
  GridRowId,
  GridRowModel,
} from "@mui/x-data-grid";
import "./styles.css";

type TableProps = {
  columns: GridColDef[];
  rows: GridRowModel[];
  onRowSelectionModelChange: (row: string[]) => void;
};

const Table: React.FC<TableProps> = ({
  columns,
  rows,
  onRowSelectionModelChange,
}) => {
  const onRowsSelected = (selectRows: GridRowId[]) => {
    onRowSelectionModelChange(selectRows.map((id) => id.toString()));
  };

  return (
    <div className="table-container">
      <DataGrid
        checkboxSelection
        onRowSelectionModelChange={onRowsSelected}
        columns={columns}
        rows={rows}
      />
    </div>
  );
};

export default Table;
