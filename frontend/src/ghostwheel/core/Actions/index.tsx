import React from 'react';
import { Button } from 'ghostwheel';

export const Action = ({ handler, text }) => {
  return <Button onClick={handler}>{text}</Button>;
};

export const Actions = ({ actions }) => {
  return (
    <div className="Actions">
      {actions.map((a) => (
        <Action key={a.text} {...a} />
      ))}
    </div>
  );
};
