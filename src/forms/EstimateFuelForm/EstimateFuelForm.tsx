import { useFormik } from "formik";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useCallback, useEffect } from "react";
import validationSchema from "./validationSchema";
import { FormProperties } from "../../types/types";
import "./styles.css";

interface EstimateFuelFormProps {
  onSubmit: (value: FormProperties) => void;
  dataEdit: FormProperties;
}

function EstimateFuelForm({ onSubmit, dataEdit }: EstimateFuelFormProps) {
  const initialFormState: FormProperties = {
    id: "",
    licensePlate: "",
    model: "",
    tankCapacity: 0,
    maximumLoad: 0,
    averageConsumption: 0,
    distanceTraveled: 0,
    consumption: "0",
  };

  const handleSubmit = (value: FormProperties) => {
    const averageWeight: number =
      value.maximumLoad / (value.distanceTraveled * 0.001);

    const consumption = (
      (value.averageConsumption * 1000) /
      (averageWeight * 1000)
    ).toFixed(2);

    onSubmit({ ...value, consumption, id: dataEdit.id });
    formik.resetForm();
    formik.registerField;
  };

  const formik = useFormik({
    initialValues: initialFormState,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  const setDataFormik = useCallback(() => {
    formik.setValues(dataEdit);
  }, [dataEdit, formik]);

  useEffect(() => {
    if (dataEdit.id) {
      setDataFormik();
    }
  }, [dataEdit]);

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <div className="form-row">
        <Input
          label="Placa"
          type="text"
          name="licensePlate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.licensePlate}
          error={
            formik.touched.licensePlate && Boolean(formik.errors.licensePlate)
          }
          helperText={formik.touched.licensePlate && formik.errors.licensePlate}
        />
        <Input
          label="Modelo"
          type="text"
          name="model"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.model}
          error={formik.touched.model && Boolean(formik.errors.model)}
          helperText={formik.touched.model && formik.errors.model}
        />
        <Input
          label="Capacidade Tanque"
          type="number"
          name="tankCapacity"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tankCapacity}
          error={
            formik.touched.tankCapacity && Boolean(formik.errors.tankCapacity)
          }
          helperText={formik.touched.tankCapacity && formik.errors.tankCapacity}
          adornment="lt"
        />
        <Input
          label="Carga Máxima"
          type="number"
          name="maximumLoad"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.maximumLoad}
          error={
            formik.touched.maximumLoad && Boolean(formik.errors.maximumLoad)
          }
          helperText={formik.touched.maximumLoad && formik.errors.maximumLoad}
          adornment="t"
        />
        <Input
          label="Consumo Médio"
          type="number"
          name="averageConsumption"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.averageConsumption}
          error={
            formik.touched.averageConsumption &&
            Boolean(formik.errors.averageConsumption)
          }
          helperText={
            formik.touched.averageConsumption &&
            formik.errors.averageConsumption
          }
          adornment="lt"
        />
        <Input
          label="Distância Percorrida"
          type="number"
          name="distanceTraveled"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.distanceTraveled}
          error={
            formik.touched.distanceTraveled &&
            Boolean(formik.errors.distanceTraveled)
          }
          helperText={
            formik.touched.distanceTraveled && formik.errors.distanceTraveled
          }
          adornment="km"
        />
      </div>
      <div className="form-buttons">
        <Button type="submit" width="8rem">
          Calcular
        </Button>
      </div>
    </form>
  );
}

export default EstimateFuelForm;
