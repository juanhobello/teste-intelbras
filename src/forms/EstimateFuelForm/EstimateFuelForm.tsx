import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const EstimateFuelForm = () => {
  return (
    <form>
      <Input label="Placa" />
      <Input label="Modelo" />
      <Input label="Capacidade Tanque" />
      <Input label="Carga Máxima" />
      <Input label="Consumo Médio" />
      <Input label="Distância Percorrida" />
      <Button onClick={() => {}}>Calcular</Button>
    </form>
  );
};

export default EstimateFuelForm;
