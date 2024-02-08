import SnackbarMui from "@mui/material/Snackbar";
import AlertMui, {
  AlertColor,
  AlertPropsColorOverrides,
} from "@mui/material/Alert";
import { SyntheticEvent } from "react";
import { OverridableStringUnion } from "@mui/types";

interface AlertProps {
  open?: boolean;
  severity: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
  message: string;
  handleClose: (event: Event | SyntheticEvent<Event | Element>) => void;
}

export default function Alert({
  open,
  handleClose,
  severity,
  message,
}: AlertProps) {
  return (
    <SnackbarMui open={open} autoHideDuration={3000} onClose={handleClose}>
      <AlertMui
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </AlertMui>
    </SnackbarMui>
  );
}
