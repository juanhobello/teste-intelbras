import SnackbarMui from "@mui/material/Snackbar";
import AlertMui, {
  AlertColor,
  AlertPropsColorOverrides,
} from "@mui/material/Alert";
import { OverridableStringUnion } from "@mui/types";

interface AlertProps {
  open?: boolean;
  severity: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
  message: string;
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

export default function Alert({
  open,
  handleClose,
  severity,
  message,
}: AlertProps) {
  const setHandleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    handleClose();
  };
  return (
    <SnackbarMui open={open} autoHideDuration={3000} onClose={handleClose}>
      <AlertMui
        onClose={setHandleClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </AlertMui>
    </SnackbarMui>
  );
}
