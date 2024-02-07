import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import "./styles.css";

type TableProps = {
  columns: GridColDef[];
  rows: GridRowModel[];
  onRowSelectionModelChange: (selectionModel: GridRowModel) => void;
};

const Table: React.FC<TableProps> = ({
  columns,
  rows,
  onRowSelectionModelChange,
}) => {
  return (
    <div className="table-container">
      <DataGrid
        checkboxSelection
        onRowSelectionModelChange={onRowSelectionModelChange}
        columns={columns}
        rows={rows}
      />
    </div>
  );
};

export default Table;
