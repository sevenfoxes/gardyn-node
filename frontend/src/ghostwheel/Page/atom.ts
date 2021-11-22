import { atom } from 'recoil';

export interface pageInterface {
  name?: string;
  title?: string;
  route?: string;
}

const def: pageInterface = {
  name: '',
  title: '',
};

export const pageState = atom({
  key: 'pageState',
  default: def,
});
