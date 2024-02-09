interface fuelEstimateModelProps {
  maximumLoad: number;
  distanceTraveled: number;
  averageConsumption: number;
}

export default function fuelEstimateModel({
  maximumLoad,
  distanceTraveled,
  averageConsumption,
}: fuelEstimateModelProps) {
  return {
    getConsumption: () => {
      const averageWeight = maximumLoad / (distanceTraveled * 0.001);
      const consumption = (
        (averageConsumption * 1000) /
        (averageWeight * 1000)
      ).toFixed(2);
      return consumption;
    },
  };
}
