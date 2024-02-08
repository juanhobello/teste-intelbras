import { ReactNode } from "react";
import IconButtonMui from "@mui/material/IconButton";

interface IconButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function IconButton({
  children,
  disabled,
  onClick,
}: IconButtonProps) {
  return (
    <IconButtonMui onClick={onClick} disabled={disabled}>
      {children}
    </IconButtonMui>
  );
}
