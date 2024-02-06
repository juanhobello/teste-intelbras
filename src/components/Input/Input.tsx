import TextField from '@mui/material/TextField';

type InputProps = {
  label: string;
}

const Input: React.FC<InputProps> = ({ label }) => {
  return<TextField label={label} variant="outlined" />
}

export default Input