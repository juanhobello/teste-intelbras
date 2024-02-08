import { ReactNode } from "react";
import { InputAdornment } from "@mui/material";
import { CustomMuiTextField } from "./styles";

interface InputProps {
  label: string;
  type: string;
  value: string | number;
  name: string;
  adornment?: ReactNode;
  error?: boolean;
  helperText?: string | false | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

function Input({
  label,
  type,
  value,
  name,
  error,
  adornment,
  helperText,
  onChange,
  onBlur,
}: InputProps) {
  return (
    <CustomMuiTextField
      label={label}
      type={type}
      value={value}
      name={name}
      error={error}
      onChange={onChange}
      onBlur={onBlur}
      variant="outlined"
      helperText={helperText}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{adornment}</InputAdornment>
        ),
      }}
    />
  );
}

export default Input;
