/* eslint-disable react/prop-types */
// import { React, propTypes } from 'react';
import { React } from 'react';

function ButtonNumber({ numberProp }) {
  const buttonClass = `button buttonNumber button-${numberProp}`;
  return (
    <button className={buttonClass} type="button">{numberProp}</button>
  );
}

// ButtonNumber.propTypes = {
//   numberProp: propTypes.number.isRequired,
// };

export default ButtonNumber;
