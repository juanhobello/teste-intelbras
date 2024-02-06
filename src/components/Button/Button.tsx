import ButtonMui from "@mui/material/Button";
import { ReactNode } from "react";
import "./styles.css";

type ButtonProps = {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <ButtonMui className="MuiButtonBase-root" onClick={onClick}>
      {children}
    </ButtonMui>
  );
};

export default Button;
