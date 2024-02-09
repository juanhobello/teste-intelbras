import {
  DataGrid,
  GridColDef,
  GridRowId,
  GridRowModel,
} from "@mui/x-data-grid";
import "./styles.css";

interface TableProps {
  columns: GridColDef[];
  rows: GridRowModel[];
  onRowSelectionModelChange: (row: string[]) => void;
}

export default function Table({
  columns,
  rows,
  onRowSelectionModelChange,
}: TableProps) {
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
}
