import React, { ReactNode } from 'react';
import { Card, makeStyles } from 'ghostwheel';
import { useRecoilValue } from 'recoil';
import { gardenSelector } from 'Gardens';

const useStyles = makeStyles(
  ({ brightGreen, green, Color }) => ({
    cardFooter: {
      borderTop: `1px solid ${green}`,
      background: `${Color(green).alpha(0.3)}`,
      color: brightGreen,
      fontSize: 12,
      padding: [10],
      textAlign: 'right',
      letterSpacing: [0.5],
    },
    cardHeader: {
      padding: '1rem',
    },
    cardMain: {
      padding: '1rem',
    },
    details: {
      maxWidth: '50%',
    },
    details_title: {
      border: `1px solid ${green}`,
      background: `${Color(green).alpha(0.3)}`,
      borderBottom: 'none',
      borderRadius: [10, 10, 0, 0],
      color: green,
      fontSize: 13,
      padding: [5, 10],
      margin: 0,
    },
    details_list: {
      border: `1px solid ${green}`,
      borderRadius: [0, 0, 10, 10],
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      '& li': {
        borderBottom: `1px solid ${green}`,
        fontSize: 14,
        padding: [5, 10],
        '&:last-child': {
          borderBottom: 'none',
        },
      },
    },
  }),
  'Gardens',
);

const GardenFooter = ({ updated_at }) => <>{updated_at}</>;

interface GardenType {
  id: any;
  children?: ReactNode;
}
export const Garden = ({ id, children }: GardenType) => {
  const {
    name,
    grow_technique,
    substrate,
    updated_at,
    water_capacity,
    water_supply,
  } = useRecoilValue(gardenSelector(id));
  const c = useStyles();

  return (
    <Card
      styling={c}
      title={name}
      footer={<GardenFooter updated_at={updated_at} />}
    >
      <div className={c.details}>
        <h3 className={c.details_title}>Details</h3>
        <ul className={c.details_list}>
          <li>Growing Technique: {grow_technique}</li>
          <li>Substrate: {substrate}</li>
          <li>Water Capacity: {water_capacity}</li>
          {water_supply && <li>Has water supply </li>}
        </ul>
      </div>
      <div>
        <h3>Plants</h3>
        <div>No Plants</div>
        {children}
      </div>
    </Card>
  );
};
