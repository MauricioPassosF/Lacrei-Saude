/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';

import App from './App';

it('Testes do header', () => {
  render(<App />);
  expect(screen.getByTestId('header')).toBeInTheDocument();
});
