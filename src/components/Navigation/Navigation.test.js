import { render, screen } from '@testing-library/react';
import { Navigation } from './Navigation';

describe('<Navigation /> spec', () => {
  it('renders correct title text', () => {
    render(<Navigation />);

    expect(screen.getByRole('heading')).toHaveTextContent('Quotes');
  });

  it('renders correct Button text', () => {
    render(<Navigation />);

    expect(screen.getByRole('button')).toHaveTextContent('Create New');
  });
});
