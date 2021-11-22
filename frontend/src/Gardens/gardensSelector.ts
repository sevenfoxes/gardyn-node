import { shadow } from 'ghostwheel';
import { selector } from 'recoil';

export const gardensSelector = selector({
  key: 'gardensSelector',
  get: async () => {
    // can we send an object?
    const response = await shadow.get('/gardens');

    return [
      response.map((g) => g.id) || [],
      response.reduce((acc, item) => ({ ...acc, [item.id]: item }), {}),
    ];
  },
});
