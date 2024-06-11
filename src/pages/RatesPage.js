import React from 'react';
import ExchangeRates from '../components/ExchangeRates';

const RatesPage = ({ baseCurrency }) => {
  return (
    <div>
      <h1>Rates Page</h1>
      <ExchangeRates baseCurrency={baseCurrency} />
    </div>
  );
};

export default RatesPage;
