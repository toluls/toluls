import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Tolulope"', () => {
  render(<App />);
  const nameText = screen.getByText(/Tolulope/i);
  expect(nameText).toBeInTheDocument();
});
