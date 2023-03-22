import React, { useState } from 'react';
import ButtonNumber from './ButtonNumber';
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
    }
  };

  const operatorBasic = (operator) => {
    if (object.total && object.next && object.operation) {
      const result = calculate(object, operator);
      setObject({
        operation: result.operation ? result.operation : operator,
        next: result.next ? result.next : '',
        total: result.total ? result.total: '0',
      });
    } else {
      setObject({ ...object, operation: operator });
    }
  };

  return (
    <div>
      <input type="text" placeholder="0" />
      <div className="buttons-container">
        <ButtonNumber key={0} indexProp={0} numberProp={0} />
        <ButtonNumber key={1} indexProp={1} numberProp={1} />
        <ButtonNumber key={2} indexProp={2} numberProp={2} />
        <ButtonNumber key={3} indexProp={3} numberProp={3} />
        <ButtonNumber key={4} indexProp={4} numberProp={4} />
        <ButtonNumber key={5} indexProp={5} numberProp={5} />
        <ButtonNumber key={6} indexProp={6} numberProp={6} />
        <ButtonNumber key={7} indexProp={7} numberProp={7} />
        <ButtonNumber key={8} indexProp={8} numberProp={8} />
        <ButtonNumber key={9} indexProp={9} numberProp={9} />
        <ButtonNumber key={10} indexProp={10} numberProp="." />
        <ButtonNumber key={11} indexProp={11} numberProp="/" />
        <ButtonNumber key={12} indexProp={12} numberProp="x" />
        <ButtonNumber key={13} indexProp={13} numberProp="-" />
        <ButtonNumber key={14} indexProp={14} numberProp="+" />
        <ButtonNumber key={15} indexProp={15} numberProp="=" />
        <ButtonNumber key={16} indexProp={16} numberProp="AC" />
        <ButtonNumber key={17} indexProp={17} numberProp="+/-" />
        <ButtonNumber key={18} indexProp={18} numberProp="%" />
      </div>
    </div>
  );
}
