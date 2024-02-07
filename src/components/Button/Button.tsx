import { ReactNode } from "react";
import { CustomButton } from "./styles";

type ButtonProps = {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: "button" | "submit" | "reset" | undefined;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <CustomButton onClick={onClick} className="MuiButtonBase-root" type={type}>
      {children}
    </CustomButton>
  );
};

export default Button;
