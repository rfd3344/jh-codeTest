import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Calculator } from 'src/conversionCalculator/Calculator';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/conversion-calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}
