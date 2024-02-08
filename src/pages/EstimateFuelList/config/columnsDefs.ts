import FlagConsumption from "../../../components/Table/components/FlagConsumption";

export const columnsDefs = [
  {
    field: "licensePlate",
    headerName: "Placa",
    width: 120,
  },
  {
    field: "model",
    headerName: "Modelo",
    width: 150,
  },
  {
    field: "tankCapacity",
    headerName: "Capacidade Tanque",
    type: "number",
    width: 150,
  },
  {
    field: "maximumLoad",
    headerName: "Carga Máxima",
    type: "number",
    width: 150,
  },
  {
    field: "averageConsumption",
    headerName: "Consumo Médio",
    type: "number",
    width: 150,
  },
  {
    field: "distanceTraveled",
    headerName: "Distância Percorrida",
    type: "number",
    width: 150,
  },
  {
    field: "consumption",
    headerName: "Consumo Litros/Km/T",
    type: "number",
    width: 200,
    renderCell: FlagConsumption,
  },
];
