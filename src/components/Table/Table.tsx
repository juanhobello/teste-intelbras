import { DataGrid } from "@mui/x-data-grid";
import "./styles.css";

const Table = () => {
  return (
    <div className="table-container">
      <DataGrid
        checkboxSelection
        onRowSelectionModelChange={() => console.log("Test")}
        columns={[]}
        rows={[]}
      />
    </div>
  );
};

export default Table;
