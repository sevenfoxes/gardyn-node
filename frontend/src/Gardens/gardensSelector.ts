import { shadow, time } from 'ghostwheel';
import { selectorFamily, selector } from 'recoil';

export const gardensSelector = selector({
  key: 'gardensSelector',
  get: async () => {
    // can we send an object?
    const response = await shadow.get('/gardens');

    return [
      response.map((g) => g.id),
      response.reduce((acc, item) => ({ ...acc, [item.id]: item }), {}),
    ];
  },
});

interface GardenType {
  name: string;
  grow_technique: string;
  substrate: string;
  updated_at: string;
  water_capacity: number;
  water_supply: boolean;
}

export const gardenSelector = selectorFamily({
  key: 'gardenSelector',
  get:
    (id: number) =>
    async ({ get }): Promise<GardenType> => {
      const garden = get(gardensSelector)[1][id];

      return {
        ...garden,
        water_capacity: `${garden.water_capacity}L`,
        updated_at: `last updated: ${time.formatUs(
          Date.parse(garden.updated_at),
        )}`,
      };
    },
});
