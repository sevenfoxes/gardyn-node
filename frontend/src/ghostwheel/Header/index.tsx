import React, { useEffect } from 'react';
import { Wrapper } from '../core';
import { makeStyles, useDimensions } from 'ghostwheel';
import { headerHeightSelector } from './headerHeightSelector';
import { useRecoilState } from 'recoil';

const useStyles = makeStyles(
  ({ colors, variables }) => ({
    root: {
      ...variables.gutter,
      background: colors.headerBg,
      color: colors.headerFg,
      display: 'grid',
      fontSize: '1.5rem',
      left: 0,
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 999,
      alignItems: 'center',
      textTransform: 'uppercase',
    },
  }),
  'Header',
);

export const Header = ({ children, subHeader = false }) => {
  const [height, setHeight] = useRecoilState(headerHeightSelector);
  const { ref, dimensions } = useDimensions({ height });
  const c = useStyles();

  useEffect(() => {
    if (dimensions.height !== height) {
      setHeight(dimensions.height);
    }
  }, [height, dimensions.isDomAttached]);

  return (
    <header ref={ref} className={c.root}>
      <Wrapper vPadding={6}>{children}</Wrapper>
      {!!subHeader && subHeader}
    </header>
  );
};
