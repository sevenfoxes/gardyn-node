import { useEffect } from 'react';
import { pageState, pageInterface } from './atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export const usePage = (atom) => {
  const setPage = useSetRecoilState(pageState);
  const page: pageInterface = useRecoilValue(atom);
  useEffect(() => {
    setPage(page);
  }, [setPage, page]);
};
