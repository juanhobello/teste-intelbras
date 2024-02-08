import { ReactNode } from "react";
import { CustomButton } from "./styles";

type ButtonProps = {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  width?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, type, width }) => {
  return (
    <CustomButton
      onClick={onClick}
      className="MuiButtonBase-root"
      type={type}
      sx={{ width: width }}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
