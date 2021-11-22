import React from 'react';
import { classnames, makeStyles } from 'ghostwheel';

const useStyles = makeStyles(
  ({ variables }) => ({
    root: {
      padding: variables.cellPadding,
      minHeight: 68,
    },
    currency: {
      textAlign: 'right',
    },
  }),
  'TableCell',
);

export const TableCell = ({ children, currency = false, className = 'no' }) => {
  const c = useStyles();

  return (
    <td
      className={classnames(c.root, {
        [className]: className !== 'no',
        [c.currency]: !!currency,
      })}
    >
      {children}
    </td>
  );
};
