import ButtonNumber from './ButtonNumber';

function Calculator() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '/', 'x', '-', '+', '='];
  const numsList = [];
  nums.forEach((element) => {
    numsList.push(<ButtonNumber key="number-nums" numberProp={element} />);
  });

  return (
    <div>
      <h1>
        Testing React!
      </h1>
      <div>
        <div>
          <input type="text" placeholder="0" />
        </div>
        {numsList}
      </div>
    </div>
  );
}

export default Calculator;
