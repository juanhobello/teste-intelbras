import { CustomMuiTextField } from "./styles";

interface InputProps {
  label: string;
  type: string;
  value: string | number;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, type, value, name, onChange }: InputProps) {
  return (
    <CustomMuiTextField
      label={label}
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      variant="outlined"
    />
  );
}

export default Input;
