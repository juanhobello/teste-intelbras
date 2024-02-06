import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import "./styles.css";

type TableProps = {
  columns: GridColDef[];
  rows: GridRowModel[];
};

const Table: React.FC<TableProps> = ({ columns, rows }) => {
  return (
    <div className="table-container">
      <DataGrid
        checkboxSelection
        onRowSelectionModelChange={() => console.log("Test")}
        columns={columns}
        rows={rows}
      />
    </div>
  );
};

export default Table;
