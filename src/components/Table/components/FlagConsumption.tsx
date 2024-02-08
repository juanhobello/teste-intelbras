import { GridRenderCellParams } from "@mui/x-data-grid";
import "./styles.css";

export default function FlagConsumption(params: GridRenderCellParams) {
  const value = Number(params.value);
  let colorBadge = "--red-status";

  if (value < 1) {
    colorBadge = "--red-status";
  } else if (value >= 1 && value < 2) {
    colorBadge = "--yellow-status";
  } else if (value >= 2) {
    colorBadge = "--green-status";
  }

  return (
    <div className="flag-container">
      <span
        className="badge"
        style={{ background: `var(${colorBadge})` }}
      ></span>
      {params.value}
    </div>
  );
}
