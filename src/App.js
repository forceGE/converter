import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ConverterPage from './pages/ConverterPage';
import RatesPage from './pages/RatesPage';

const App = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD');

  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Converter</Link></li>
              <li><Link to="/rates">Rates</Link></li>
            </ul>
          </nav>
          <main>
            <Routes>
              <Route path="/" exact element={<ConverterPage baseCurrency={baseCurrency} />} />
              <Route path="/rates" element={<RatesPage baseCurrency={baseCurrency} />} />
            </Routes>
          </main>
        </div>
      </Router>
  );
};

export default App;
