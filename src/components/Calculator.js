import ButtonNumber from './ButtonNumber';

function Calculator() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '/', 'x', '-', '+', '=', 'AC', '+/-', '%'];
  const numsList = [];
  nums.forEach((element, index) => {
    numsList.push(<ButtonNumber key="number-nums" indexProp={index} numberProp={element} />);
  });

  return (
    <div>
      <input type="text" placeholder="0" />
      <div className="buttons-container">
        {numsList}
      </div>
    </div>
  );
}

export default Calculator;
