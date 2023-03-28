import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [object, setObject] = useState({
    total: '0',
    next: '',
    operation: '',
  });

  const operatorSymbol = (symbol) => {
    if (symbol === '=') {
      if (object.total && object.next && object.operation) {
        const result = calculate(object, symbol);
        setObject({
          operation: result.operation ? result.operation : '',
          next: result.next ? result.next : '',
          total: result.total ? result.total : '',
        });
      }
    } else {
      const result = calculate(object, symbol);
      setObject({
        operation: result.operation ? result.operation : '',
        next: result.next ? result.next : '',
        total: result.total ? result.total : '0',
      });
    }
  };

  const processValue = (value) => {
    if (!object.operation) {
      let currentValue = object.total + value;
      if (currentValue[0] === '0') currentValue = currentValue.slice(1);
      setObject({ ...object, total: currentValue });
    } else {
      const currentValue = object.next + value;
      setObject({ ...object, next: currentValue });
    }
  };

  const operatorBasic = (operator) => {
    if (object.total && object.next && object.operation) {
      const result = calculate(object, operator);
      setObject({
        operation: result.operation ? result.operation : operator,
        next: result.next ? result.next : '',
        total: result.total ? result.total : '0',
      });
    } else {
      setObject({ ...object, operation: operator });
    }
  };

  return (
    <div className="calculator-wrapper">
      <div className="display">{object.next || object.total}</div>
      <div className="buttons-container">
        <button className="button buttonNumber button-0" type="button" onClick={() => processValue('0')}>0</button>
        <button className="button buttonNumber button-1" type="button" onClick={() => processValue('1')}>1</button>
        <button className="button buttonNumber button-2" type="button" onClick={() => processValue('2')}>2</button>
        <button className="button buttonNumber button-3" type="button" onClick={() => processValue('3')}>3</button>
        <button className="button buttonNumber button-4" type="button" onClick={() => processValue('4')}>4</button>
        <button className="button buttonNumber button-5" type="button" onClick={() => processValue('5')}>5</button>
        <button className="button buttonNumber button-6" type="button" onClick={() => processValue('6')}>6</button>
        <button className="button buttonNumber button-7" type="button" onClick={() => processValue('7')}>7</button>
        <button className="button buttonNumber button-8" type="button" onClick={() => processValue('8')}>8</button>
        <button className="button buttonNumber button-9" type="button" onClick={() => processValue('9')}>9</button>
        <button className="button buttonNumber button-10" type="button" onClick={() => processValue('.')}>.</button>
        <button className="button buttonNumber button-11" id="button-11" type="button" onClick={() => operatorBasic('÷')}>÷</button>
        <button className="button buttonNumber button-x" id="button-12" type="button" onClick={() => operatorBasic('x')}>x</button>
        <button className="button buttonNumber button-13" id="button-13" type="button" onClick={() => operatorBasic('-')}>-</button>
        <button className="button buttonNumber button-14" id="button-14" type="button" onClick={() => operatorBasic('+')}>+</button>
        <button className="button buttonNumber button-15" id="button-15" type="button" onClick={() => operatorSymbol('=')}>=</button>
        <button className="button buttonNumber button-AC" id="button-16" type="button" onClick={() => operatorSymbol('AC')}>AC</button>
        <button className="button buttonNumber button-17" id="button-17" type="button" onClick={() => operatorSymbol('+/-')}>+/-</button>
        <button className="button buttonNumber button-18" id="button-18" type="button" onClick={() => operatorSymbol('%')}>%</button>
      </div>
    </div>
  );
}
