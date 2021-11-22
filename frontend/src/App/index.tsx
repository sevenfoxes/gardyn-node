import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'react-jss';

import { theme } from 'ghostwheel';

export const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <div>testing 1234</div>
      </ThemeProvider>
    </RecoilRoot>
  );
};
