import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExchangeRates = ({ baseCurrency }) => {
  const [rates, setRates] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        setRates(response.data.rates);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };
    fetchRates();
  }, [baseCurrency]);

  return (
    <div>
      <h2>Exchange Rates</h2>
      <ul>
        {Object.entries(rates).map(([currency, rate]) => (
          <li key={currency}>
            1 {baseCurrency} = {rate} {currency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExchangeRates;
