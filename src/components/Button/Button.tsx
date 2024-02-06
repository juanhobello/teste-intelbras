import { ReactNode } from "react";
import { CustomButton } from "./styles";

type ButtonProps = {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <CustomButton onClick={onClick} className="MuiButtonBase-root">
      {children}
    </CustomButton>
  );
};

export default Button;
