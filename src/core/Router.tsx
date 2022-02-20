import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Calculator } from 'src/conversionCalculator/Calculator';

export function Router() {
  // const useStyles = makeStyles((theme) => ({}));
  // const classes = useStyles();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/conversion-calculator" element={<Calculator />} />

      </Routes>
    </BrowserRouter>
  );
}
