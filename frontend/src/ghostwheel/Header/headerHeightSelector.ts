import { selector } from 'recoil';
import { headerState } from './atom';
import { set as _set } from 'lodash/fp';

export const headerHeightSelector = selector({
  key: 'headerHeightSelector',
  get: ({ get }): number => get(headerState).style.height,
  set: ({ set, get }, height) =>
    set(headerState, _set('style.height', height, get(headerState))),
});
