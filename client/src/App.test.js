import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('renders without crashing', () => {
  render(<App />);
});

test('renders the h1 title', () => {
  const wrapper = rtl.render(
    <App />
  );
  const element = wrapper.queryByText(/Women World Cup Stars/i);
  expect(element).toBeInTheDocument();
});