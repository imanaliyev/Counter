import React, { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  const add = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    setResult(num1 + num2);
  };

  const multiply = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    setResult(num1 * num2);
  }

  const substract = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    setResult(num1 - num2);
  };

  const divide = () => {
    if (number2 === "0") {
      setResult("can't devide to 0")
    }
      else{
        const num1 = parseFloat(number1);
        const num2 = parseFloat(number2);
         setResult(num1 / num2);
      }
      
   
    
  };
  const selectNum1=(e)=>{
     setNumber1(e.target.value)
  }
  const selectNum2=(e)=>{
    setNumber2(e.target.value)
 }

  return (
    <div>
      <label>
        Number 1:
        <input type="text" onChange={selectNum1} />
      </label>
      <label>
        Number 2:
        <input type="text" onChange={selectNum2} />
      </label>

      <div>
        <button onClick={add}>Add</button>
        <button onClick={multiply}>Multiply</button>
        <button onClick={substract}>Substract</button>
        <button onClick={divide}>Divide</button>
      </div>

     <p>Result: {result}</p>
    </div>
  );
};


export default App;