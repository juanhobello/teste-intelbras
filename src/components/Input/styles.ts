import { styled } from "@mui/material/styles";
import MuiTextField from "@mui/material/TextField";

export const CustomMuiTextField = styled(MuiTextField)(() => ({
  "& .MuiInputBase-input": {
    "&:hover + fieldset, &:focus + fieldset": {
      borderColor: "var(--green-200)",
    },
  },
  "& .MuiFormLabel-root": {
    color: "var(--green-200)",
  },
  "& fieldset": {
    borderColor: "var(--green-200)",
  },
}));
