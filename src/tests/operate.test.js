import operate from '../logic/operate';

describe('operate logic', () => {
  describe('operations', () => {
    it('Add two numbers', () => {
      expect(operate(3, 2, '+')).toBe('5');
    });
    it('subtract two numbers', () => {
      expect(operate(3, 2, '-')).toBe('1');
    });
    it('multiply two numbers', () => {
      expect(operate(3, 2, 'x')).toBe('6');
    });
    it('divide two numbers', () => {
      expect(operate(3, 2, '÷')).toBe('1.5');
    });
  });
  describe('errors', () => {
    it('returns an error message for a unknown operation', () => {
      expect(() => operate(5, 3, 'unknown')).toThrow("Unknown operation 'unknown'");
    });
    it('returns an error message when dividing by zero', () => {
      expect(operate(5, 0, '÷')).toBe("Can't divide by 0.");
    });
    it('returns error message when finding modulo by 0', () => {
      expect(operate(5, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
    });
  });
});
