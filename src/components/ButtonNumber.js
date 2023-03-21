/* eslint-disable react/prop-types */
import { React } from 'react';

function ButtonNumber({ numberProp, indexProp }) {
  const buttonClass = `button buttonNumber button-${numberProp}`;
  const buttonId = `button-${indexProp}`;
  return (
    <button className={buttonClass} id={buttonId} type="button">{numberProp}</button>
  );
}

export default ButtonNumber;
