import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
          <Switch>
            <Route path="/" exact>
              <ConverterPage baseCurrency={baseCurrency} />
            </Route>
            <Route path="/rates">
              <RatesPage baseCurrency={baseCurrency} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
