export type graphDataType = {
  data: {
    datasets: {
      data: { x: Date; y: number }[] | null;
      fill: boolean;
      backgroundColor: string;
      borderColor: string;
      pointRadius: number;
      lineTension?: number;
    }[];
  };
};
