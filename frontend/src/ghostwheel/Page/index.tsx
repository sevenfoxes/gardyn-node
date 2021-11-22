import React, { ReactNode } from 'react';
import { makeStyles, Header, Wrapper } from 'ghostwheel';
import { headerHeightSelector } from '../Header/headerHeightSelector';
import { useRecoilValue } from 'recoil';

const useStyles = makeStyles(
  ({ baseMargin }) => ({
    root: {
      height: 'inherit',
      paddingTop: ({ paddingTop }) =>
        `calc(env(safe-area-inset-left) + ${baseMargin} + ${paddingTop}px)` ||
        50,
    },
  }),
  'Page',
);

interface PageInterface {
  menu?: any;
  logo?: any;
  wrap?: boolean;
  children: ReactNode;
}

export const Page = ({ children, menu, logo, wrap = false }: PageInterface) => {
  const paddingTop = useRecoilValue(headerHeightSelector);
  const c = useStyles();
  // const setActiveRoute = useSetSelector();
  // useEffect(() => {
  //   setActiveRoute();
  // }, [setActiveRoute]);

  return (
    <>
      <div className={c.root}>
        <main>{wrap ? <Wrapper>{children}</Wrapper> : children}</main>
        <Header>
          {logo}
          {menu}
        </Header>
      </div>
    </>
  );
};
