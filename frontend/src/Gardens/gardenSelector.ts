import { selectorFamily } from 'recoil';
import { gardensSelector } from './gardensSelector';
import { GardenInterface } from './GardenInterface';
import { time } from 'ghostwheel';

export const gardenSelector = selectorFamily({
  key: 'gardenSelector',
  get:
    (id: number) =>
    async ({ get }): Promise<GardenInterface> => {
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
