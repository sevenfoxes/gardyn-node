import React, { ReactNode } from 'react';
import { Actions, Card, makeStyles, AddOutlineIcon } from 'ghostwheel';

import { useRecoilValue } from 'recoil';
import { gardensSelector } from 'Gardens';
import { Garden } from './Garden';

const useStyles = makeStyles(
  ({ variables, brightGreen, green, Color }) => ({
    root: {
      background: variables.lightPitch,
      paddingBottom: [13],
    },
    header: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridTemplateColumns: '1fr',
      alignItems: 'center',
    },
    title: {
      // color: brightGreen,
      fontWeight: 'normal',
      fontSize: 20,
      margin: 0,
    },
    t: {
      display: 'inline-block',
    },
    cardHeader: {
      border: `1px solid ${green}`,
      borderBottom: 'none',
      background: `${Color(brightGreen).alpha(0.2)}`,
    },
    cardMain: {
      border: `1px solid ${green}`,
    },
  }),
  'Gardens',
);

const GardenActions = () => {
  const createGardenHandler = () => {
    console.log('create the garden');
  };

  const actions = [
    {
      handler: createGardenHandler,
      text: (
        <>
          new garden <AddOutlineIcon />
        </>
      ),
    },
  ];

  return <Actions actions={actions} />;
};

export const Gardens = () => {
  const c = useStyles();
  // const [gardenIds] = useRecoilValue(gardensSelector);
  // console.log(gardenIds);
  return (
    <Card title="Gardens" styling={c} wrap>
      hi
    </Card>
  );

  // return (
  //   !!gardenIds.length && (
  //     <Card styling={c} title="Gardens" actions={<GardenActions />} wrap>
  //       {gardenIds.map((id) => (
  //         <Garden id={id} key={id} />
  //       ))}
  //     </Card>
  //   )
  // );
};
