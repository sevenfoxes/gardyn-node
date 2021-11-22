import React, { ReactNode } from 'react';
import { classnames, makeStyles, Header, Wrapper, theme } from 'ghostwheel';
import { headerHeightSelector } from '../Header/headerHeightSelector';
import { useRecoilValue } from 'recoil';

const useDynamicStyles = makeStyles(({ ...r }) => {
  console.log(r);
  return {
    root: {
      height: 'inherit',
      paddingTop: (props) =>
        `calc(env(safe-area-inset-left) + ${theme.variables.baseMargin} + ${props.theme.padding}px)` ||
        50,
    },
  };
}, 'PageDynamic');

interface PageInterface {
  menu?: any;
  logo?: any;
  wrap?: boolean;
  children: ReactNode;
}

export const Page = ({ children, menu, logo, wrap = false }: PageInterface) => {
  const padding = useRecoilValue(headerHeightSelector);

  const props = { theme: { padding } };
  const d = useDynamicStyles(props);
  // const setActiveRoute = useSetSelector();
  // useEffect(() => {
  //   setActiveRoute();
  // }, [setActiveRoute]);

  return (
    <div className={classnames({ [d.root]: !!padding })}>
      <main>{wrap ? <Wrapper>{children}</Wrapper> : children}</main>
      <Header>
        {logo}
        {menu}
      </Header>
    </div>
  );
};
