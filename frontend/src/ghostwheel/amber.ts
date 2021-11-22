import { atom, selectorFamily } from 'recoil';

export const amber = atom({
  key: 'amber',
  default: {},
});

export const amberSelector = selectorFamily({
  key: 'amberSelector',
  get:
    (path: string) =>
    ({ get }) =>
      get(amber)[path],
  set:
    (path) =>
    ({ get, set }, newData: any) => {
      set(amber, {
        ...get(amber),
        [path]: newData.reduce(
          (acc, item) => ({ ...acc, [item.id]: item }),
          {},
        ),
      });
    },
});
