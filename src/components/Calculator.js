import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [object, setObject] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newObject = calculate(object, buttonName);
    setObject(newObject);
  };

  return (
    <div title="calculator-component" className="container calculator-wrapper">
      <div title="result" className="result display">{object.next || object.total || '0'}</div>
      <div className="buttons-container">
        <button className="button buttonNumber button-0" type="button" onClick={() => handleClick('0')}>0</button>
        <button className="button buttonNumber button-1" type="button" onClick={() => handleClick('1')}>1</button>
        <button className="button buttonNumber button-2" type="button" onClick={() => handleClick('2')}>2</button>
        <button className="button buttonNumber button-3" type="button" onClick={() => handleClick('3')}>3</button>
        <button className="button buttonNumber button-4" type="button" onClick={() => handleClick('4')}>4</button>
        <button className="button buttonNumber button-5" type="button" onClick={() => handleClick('5')}>5</button>
        <button className="button buttonNumber button-6" type="button" onClick={() => handleClick('6')}>6</button>
        <button className="button buttonNumber button-7" type="button" onClick={() => handleClick('7')}>7</button>
        <button className="button buttonNumber button-8" type="button" onClick={() => handleClick('8')}>8</button>
        <button className="button buttonNumber button-9" type="button" onClick={() => handleClick('9')}>9</button>
        <button className="button buttonNumber button-10" type="button" onClick={() => handleClick('.')}>.</button>
        <button className="button buttonNumber button-11" id="button-11" type="button" onClick={() => handleClick('÷')}>÷</button>
        <button className="button buttonNumber button-x" id="button-12" type="button" onClick={() => handleClick('x')}>x</button>
        <button className="button buttonNumber button-13" id="button-13" type="button" onClick={() => handleClick('-')}>-</button>
        <button className="button buttonNumber button-14" id="button-14" type="button" onClick={() => handleClick('+')}>+</button>
        <button className="button buttonNumber button-15" id="button-15" type="button" onClick={() => handleClick('=')}>=</button>
        <button className="button buttonNumber button-AC" id="button-16" type="button" onClick={() => handleClick('AC')}>AC</button>
        <button className="button buttonNumber button-17" id="button-17" type="button" onClick={() => handleClick('+/-')}>+/-</button>
        <button className="button buttonNumber button-18" id="button-18" type="button" onClick={() => handleClick('%')}>%</button>
      </div>
    </div>
  );
}
