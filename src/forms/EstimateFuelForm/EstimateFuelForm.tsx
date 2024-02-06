import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./styles.css";

const EstimateFuelForm = () => {
  return (
    <form className="form-container">
      <Input label="Placa" type="text" onChange={() => {}} />
      <Input label="Modelo" type="text" onChange={() => {}} />
      <Input label="Capacidade Tanque" type="number" onChange={() => {}} />
      <Input label="Carga Máxima" type="number" onChange={() => {}} />
      <Input label="Consumo Médio" type="number" onChange={() => {}} />
      <Input label="Distância Percorrida" type="number" onChange={() => {}} />
      <Button onClick={() => {}}>Calcular</Button>
    </form>
  );
};

export default EstimateFuelForm;
