import React from 'react';
import { classnames, makeStyles } from 'ghostwheel';

const useStyles = makeStyles(
  ({ colors, variables }) => ({
    root: {
      color: colors.orange,
      fontWeight: 'normal',
      padding: variables.cellPadding,
      paddingTop: 0,
      paddingBottom: '.5rem',
      textAlign: 'left',
    },
    currency: {
      textAlign: 'right',
    },
  }),
  'TableHeader',
);

export const TableHeader = ({ children, currency }) => {
  const c = useStyles();

  return (
    <th className={classnames(c.root, currency && c.currency)}>{children}</th>
  );
};
