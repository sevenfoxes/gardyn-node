import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'react-jss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { theme } from 'ghostwheel';
import { Dashboard } from 'Dashboard';

export const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
};
