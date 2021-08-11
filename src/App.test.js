import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Front-end developer heading"', () => {
  render(<App />);
  const nameText = screen.getByText(/A creative and passionate front-end developer/i);
  expect(nameText).toBeInTheDocument();
});
