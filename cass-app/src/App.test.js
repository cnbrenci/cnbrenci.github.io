import { render, screen } from '@testing-library/react';
import App from './App';

test('tells you about the construction', () => {
  render(<App />);
  const linkElement = screen.getByText(/Construction/i);
  expect(linkElement).toBeInTheDocument();
});
