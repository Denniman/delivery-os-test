import { render, screen } from '@testing-library/react';
import { Quotes } from './Quotes';

describe('<Quotes /> spec', () => {
  it("renders 'All' text", () => {
    render(<Quotes />);

    expect(screen.getByText('All')).toBeInTheDocument();
  });
  it("renders 'Pending' text", () => {
    render(<Quotes />);

    expect(screen.getByText('Pending')).toBeInTheDocument();
  });
  it("renders 'Ready' text", () => {
    render(<Quotes />);

    expect(screen.getByText('Ready')).toBeInTheDocument();
  });
  it("renders 'Booked' text", () => {
    render(<Quotes />);

    expect(screen.getByText('Booked')).toBeInTheDocument();
  });
});
