import { CustomMuiTextField } from "./styles";

type InputProps = {
  label: string;
  type: string;
  value?: string | number;
  onChange: (value: string | number) => void;
};

const Input: React.FC<InputProps> = ({ label, type, value, onChange }) => {
  return (
    <CustomMuiTextField
      label={label}
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      variant="outlined"
    />
  );
};

export default Input;
