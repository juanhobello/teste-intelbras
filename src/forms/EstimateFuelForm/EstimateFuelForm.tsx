import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useFormik } from "formik";
import "./styles.css";
import { useState } from "react";

interface FormProperties {
  licensePlate: string;
  model: string;
  tankCapacity: number;
  maximumLoad: number;
  averageConsumption: number;
  distanceTraveled: number;
}

const EstimateFuelForm = () => {
  const [consumptionKm, setConsumptionKm] = useState(0);

  const initialFormState: FormProperties = {
    licensePlate: "",
    model: "",
    tankCapacity: 0,
    maximumLoad: 0,
    averageConsumption: 0,
    distanceTraveled: 0,
  };

  const handleSubmit = (value: FormProperties) => {
    const averageWeight: number =
      value.maximumLoad / (value.distanceTraveled * 0.001);

    const consumption =
      (value.averageConsumption * 1000) / (averageWeight * 1000);

    setConsumptionKm(consumption);
    console.log({ ...value, consumption });
  };

  const formik = useFormik({
    initialValues: initialFormState,
    onSubmit: handleSubmit,
  });

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <div className="form-row">
        <Input
          label="Placa"
          type="text"
          name="licensePlate"
          onChange={formik.handleChange}
          value={formik.values.licensePlate}
        />
        <Input
          label="Modelo"
          type="text"
          name="model"
          onChange={formik.handleChange}
          value={formik.values.model}
        />
        <Input
          label="Capacidade Tanque"
          type="number"
          name="tankCapacity"
          onChange={formik.handleChange}
          value={formik.values.tankCapacity}
        />
        <Input
          label="Carga Máxima"
          type="number"
          name="maximumLoad"
          onChange={formik.handleChange}
          value={formik.values.maximumLoad}
        />
        <Input
          label="Consumo Médio"
          type="number"
          name="averageConsumption"
          onChange={formik.handleChange}
          value={formik.values.averageConsumption}
        />
        <Input
          label="Distância Percorrida"
          type="number"
          name="distanceTraveled"
          onChange={formik.handleChange}
          value={formik.values.distanceTraveled}
        />
      </div>
      <div className="form-buttons">
        <Button type="submit">Calcular</Button>
      </div>
      <div>
        {consumptionKm} litro(s) de combustível por tonelada transportada por
        km.
      </div>
    </form>
  );
};

export default EstimateFuelForm;
