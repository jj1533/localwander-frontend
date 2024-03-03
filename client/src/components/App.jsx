import React, { useState } from 'react';
import axios from 'axios';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = async () => {
    try {
      const response = await axios.post('http://localhost:3000/calculate', {
        num1,
        num2,
      });

      if (response.status === 200) {
        setResult(`Result is ${response.data.result}`);
      } else {
        console.error('Failed to calculate:', response.statusText);
      }
    } catch (error) {
      console.error('Error during calculation:', error.message);
    }
  };

  return (
    <div>
      <h2>Regular Calculator</h2>
      <input
        type="text"
        name="num1"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        name="num2"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default Calculator;
