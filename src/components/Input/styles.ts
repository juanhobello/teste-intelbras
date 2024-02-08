import { styled } from "@mui/material/styles";
import MuiTextField from "@mui/material/TextField";

export const CustomMuiTextField = styled(MuiTextField)(() => ({
  "& .MuiInputBase-input": {
    "&:hover + fieldset, &:focus + fieldset": {
      borderColor: "var(--green-primary)",
    },
  },
  "& .MuiFormLabel-root": {
    color: "var(--green-primary)",
  },
  "& fieldset": {
    borderColor: "var(--green-primary)",
  },
}));
