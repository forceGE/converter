import React, { useState } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleConvert = async () => {
    const [amount, from, , to] = input.split(' ');
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`);
      const rate = response.data.rates[to];
      setResult(amount * rate);
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      setResult('Error fetching exchange rate');
    }
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g. 15 USD in RUB"
      />
      <button onClick={handleConvert}>Convert</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default CurrencyConverter;
