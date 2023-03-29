import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('Home test', () => {
  test('Home component is displayed on the HTML', () => {
    render(<Home />);
    const home = screen.getByTitle('home-wrapper');
    expect(home).toMatchSnapshot();
  });
});