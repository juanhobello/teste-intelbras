import { useFormik } from "formik";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useCallback, useEffect } from "react";
import validationSchema from "./validationSchema";
import { FormProperties } from "../../types/types";
import "./styles.css";
import fuelEstimateModel from "../../services/fuelEstimateModel";

interface EstimateFuelFormProps {
  onSubmited: (value: FormProperties) => void;
  dataEdit: FormProperties;
}

function EstimateFuelForm({ onSubmited, dataEdit }: EstimateFuelFormProps) {
  const initialFormState = {
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
    const service = fuelEstimateModel({ ...value });
    const consumption = service.getConsumption();

    onSubmited({ ...value, consumption, id: dataEdit.id });
    formik.resetForm();
    formik.registerField;
  };

  const formik = useFormik({
    initialValues: initialFormState,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  const { touched, errors, values, handleChange, handleBlur } = formik;

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
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.licensePlate}
          error={touched.licensePlate && Boolean(errors.licensePlate)}
          helperText={touched.licensePlate && errors.licensePlate}
        />
        <Input
          label="Modelo"
          type="text"
          name="model"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={values.model}
          error={touched.model && Boolean(errors.model)}
          helperText={touched.model && errors.model}
        />
        <Input
          label="Capacidade Tanque"
          type="number"
          name="tankCapacity"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={values.tankCapacity}
          error={touched.tankCapacity && Boolean(errors.tankCapacity)}
          helperText={touched.tankCapacity && errors.tankCapacity}
          adornment="lt"
        />
        <Input
          label="Carga Máxima"
          type="number"
          name="maximumLoad"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={values.maximumLoad}
          error={touched.maximumLoad && Boolean(errors.maximumLoad)}
          helperText={touched.maximumLoad && errors.maximumLoad}
          adornment="t"
        />
        <Input
          label="Consumo Médio"
          type="number"
          name="averageConsumption"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={values.averageConsumption}
          error={
            touched.averageConsumption && Boolean(errors.averageConsumption)
          }
          helperText={touched.averageConsumption && errors.averageConsumption}
          adornment="lt"
        />
        <Input
          label="Distância Percorrida"
          type="number"
          name="distanceTraveled"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={values.distanceTraveled}
          error={touched.distanceTraveled && Boolean(errors.distanceTraveled)}
          helperText={touched.distanceTraveled && errors.distanceTraveled}
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
