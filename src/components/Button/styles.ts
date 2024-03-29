import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

export const CustomButton = styled(MuiButton)(() => ({
  color: "var(--white)",
  background: "var(--green-primary)",
  "&:hover": {
    background: "var(--green-300)",
  },
}));
