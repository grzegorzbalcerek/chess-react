import React from 'react';
import { render, screen } from '@testing-library/react';
import ChessApp from './chess-app';

test('renders learn react link', () => {
  render(<ChessApp />);
  const linkElement = screen.getByText(/Chess/i);
  expect(linkElement).toBeInTheDocument();
});
