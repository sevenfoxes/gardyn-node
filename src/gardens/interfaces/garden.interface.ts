export interface Garden {
  name: string;
  dimensions: {
    width: number;
    lengt: number;
  };
  substrate: string;
  type: string;
  waterCapacity: number;
}
