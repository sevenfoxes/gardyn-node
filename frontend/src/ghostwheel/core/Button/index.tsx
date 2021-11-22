import React from 'react';
import { makeStyles } from 'ghostwheel';

const useStyles = makeStyles(
  ({ brightGreen, yellow }) => ({
    root: {
      alignItems: 'center',
      background: 'transparent',
      border: 0,
      color: brightGreen,
      cursor: 'pointer',
      display: 'flex',
      padding: 0,
      position: 'relative',

      '&:hover': {
        color: yellow,
      },

      '& svg': {
        height: 20,
        width: 28,
      },
    },
  }),
  'Button',
);

export const Button = ({ onClick, children }) => {
  const c = useStyles();
  return (
    <button className={c.root} onClick={onClick}>
      {children}
    </button>
  );
};
