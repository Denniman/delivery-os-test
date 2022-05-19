import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from '../Button';

test('loads items eventually', async () => {
  render(<Button />);

  // Click button
  fireEvent.click(screen.getByText('Create New'));

  // Wait for page to update with query text
  const items = await screen.findAllByText(/Item #[0-9]: /);
  expect(items).toHaveLength(10);
});
