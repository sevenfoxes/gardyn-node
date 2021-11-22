import React, { Suspense } from 'react';
import { Gardens } from '../Gardens';
import { Page } from 'ghostwheel';

export const Dashboard = () => {
  return (
    <Page logo="Gardyn">
      <Suspense fallback={<div>loading</div>}>
        <Gardens />
      </Suspense>
    </Page>
  );
};
