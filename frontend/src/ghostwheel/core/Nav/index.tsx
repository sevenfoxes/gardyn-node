import React from 'react';
import { classnames, makeStyles } from 'ghostwheel';

const useStyles = makeStyles(
  {
    root: {},
    menu: {
      padding: 0,
      margin: 0,
      listStyle: 'none',
    },
  },
  'Nav',
);

export const Nav = ({ className, children }) => {
  const c = useStyles();

  return (
    <nav className={classnames(c.root, { className })}>
      {!!children && (
        <ul className={c.menu}>
          {React.Children.map(children, (child) => (
            <li>{child}</li>
          ))}
        </ul>
      )}
    </nav>
  );
};
