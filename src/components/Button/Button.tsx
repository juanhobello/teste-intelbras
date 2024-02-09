import { ReactNode } from "react";
import { CustomButton } from "./styles";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  width?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  onClick,
  type = "button",
  width,
  disabled,
}: ButtonProps) {
  return (
    <CustomButton
      onClick={onClick}
      className="MuiButtonBase-root"
      type={type}
      disabled={disabled}
      sx={{ width: width }}
    >
      {children}
    </CustomButton>
  );
}
