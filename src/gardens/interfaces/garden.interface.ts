export interface Garden {
  name: string;
  dimensions: {
    width: number;
    length: number;
  };
  substrate: string;
  type: string;
  waterCapacity: number;
}
