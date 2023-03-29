import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator test', () => {
  test('Calculator component is displayed on the HTML', () => {
    render(<Calculator />);
    const calculator = screen.getByTitle('calculator-component');
    expect(calculator).toMatchSnapshot();
  });

  test('Calculator buttons works and change the displayed result', () => {
    render(<Calculator />);
    const buttons = screen.getAllByRole('button');
    const result = screen.getByTitle('result');

    let cont = 1;
    buttons.forEach((button) => {
      fireEvent.click(button);
      switch (button.textContent) {
        case '0':
          expect(result.textContent).toBe('0');
          break;
        case '.':
          expect(result.textContent).toBe(123456789 + button.textContent);
          break;
        case '÷':
        case 'x':
        case '-':
        case '+':
        case '=':
        case 'AC':
        case '+/-':
        case '%':
        default:
          if (cont <= 10) {
            expect(result.textContent.length).toBe(cont);
            cont += 1;
          }
          break;
      }
    });
  });
});
