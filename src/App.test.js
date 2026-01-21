import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Jemputan Majlis Akikah/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders bismillah', () => {
  render(<App />);
  const bismillahElement = screen.getByText(/بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ/i);
  expect(bismillahElement).toBeInTheDocument();
});

test('renders WhatsApp share button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Kongsi Jemputan di WhatsApp/i);
  expect(buttonElement).toBeInTheDocument();
});
