import { render, screen } from '@testing-library/react';
import Quote from '../components/quote';

describe('Quote test', () => {
  test('Quote component display loading status', () => {
    render(<Quote />);
    const quote = screen.getByTitle('quote-container');
    expect(quote).toMatchSnapshot();
  });
});