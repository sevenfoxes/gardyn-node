import { atom } from 'recoil';

export const headerState = atom({
  key: 'headerState',
  default: {
    style: {
      height: 65,
    },
  },
});
