import calculate from '../logic/calculate';

describe('Calculate logic: ', () => {
  const obj = {
    total: '50',
    next: '8',
    operation: '+',
  };

  it('Verify that AC clears the input: ', () => {
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('Verify a number appends to next when a number is pressed', () => {
    expect(calculate(obj, '3')).toEqual({
      total: '50',
      next: '83',
      operation: '+',
    });
  });

  it('Verify it adds a decimal when "." is pressed', () => {
    expect(calculate(obj, '.')).toEqual({
      total: '50',
      next: '8.',
      operation: '+',
    });
  });

  it('Verify that "=" works', () => {
    expect(calculate(obj, '=')).toEqual({
      total: '58',
      next: null,
      operation: null,
    });
  });

  it('Verify that "=" works', () => {
    expect(calculate(obj, '=')).toEqual({
      total: '58',
      next: null,
      operation: null,
    });
  });

  it('Verify that "+/-" works', () => {
    expect(calculate(obj, '+/-')).toEqual({
      total: '50',
      next: '-8',
      operation: '+',
    });
  });

  it('Verify that "+" works', () => {
    expect(calculate(obj, '+')).toEqual({
      total: '58',
      next: null,
      operation: '+',
    });
  });

  it('Verify that "-" works', () => {
    const obj = {
      total: '50',
      next: '8',
      operation: '-',
    };
    expect(calculate(obj, '-')).toEqual({
      total: '42',
      next: null,
      operation: '-',
    });
  });

  it('Verify that "x" works', () => {
    const obj = {
      total: '50',
      next: '8',
      operation: 'x',
    };
    expect(calculate(obj, 'x')).toEqual({
      total: '400',
      next: null,
      operation: 'x',
    });
  });

  it('Verify that "÷" works', () => {
    const obj = {
      total: '50',
      next: '8',
      operation: '÷',
    };
    expect(calculate(obj, '÷')).toEqual({
      total: '6.25',
      next: null,
      operation: '÷',
    });
  });
});
