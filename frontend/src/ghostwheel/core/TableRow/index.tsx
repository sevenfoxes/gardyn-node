import React from 'react';
import { classnames, makeStyles } from 'ghostwheel';

export const useStyles = makeStyles(
  {
    root: {},
  },
  'TableRow',
);

export const TableRow = ({ className = 'no', children }) => {
  const c = useStyles();

  return (
    <tr className={classnames(c.root, { [className]: className !== 'no' })}>
      {children}
    </tr>
  );
};
