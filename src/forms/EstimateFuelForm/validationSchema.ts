import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  licensePlate: Yup.string().required("Dado obrigatório"),
  model: Yup.string().required("Dado obrigatório"),
  tankCapacity: Yup.number()
    .typeError("Informe um valor válido.")
    .positive("Deve ser maior que zero.")
    .required("Dado obrigatório"),
  maximumLoad: Yup.number()
    .typeError("Informe um valor válido.")
    .positive("Deve ser maior que zero.")
    .required("Dado obrigatório"),
  averageConsumption: Yup.number()
    .typeError("Informe um valor válido.")
    .positive("Deve ser maior que zero.")
    .required("Dado obrigatório"),
  distanceTraveled: Yup.number()
    .typeError("Informe um valor válido.")
    .positive("Deve ser maior que zero.")
    .required("Dado obrigatório"),
});

export default validationSchema;
