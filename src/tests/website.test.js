import { render, screen } from '@testing-library/react';
import Website from '../components/Website';

describe('Website test', () => {
  test('Website component is displayed', () => {
    render(<Website />);
    const website = screen.getByTitle('header-website');
    expect(website).toMatchSnapshot();
  });
});
