import { render, screen } from '@testing-library/react';
import { Navigation } from './Navigation';

it('renders navbar title text', () => {
  render(<Navigation />);

  expect(screen.getByText('Quotes')).toBeInTheDocument();
});
