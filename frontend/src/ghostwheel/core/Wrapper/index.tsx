import React from 'react';
import { makeStyles } from 'ghostwheel';

const useStyles = makeStyles(
  ({ variables }) => ({
    root: {
      ...variables.wrapper,
      alignItems: 'inherit',
      paddingBottom: ({ vPadding }) => vPadding,
      paddingTop: ({ vPadding }) => vPadding,
    },
  }),
  'Wrapper',
);

export const Wrapper = ({ children, ...props }) => {
  const c = useStyles(props);

  return <div className={c.root}>{children}</div>;
};
