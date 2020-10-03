import React from 'react';
import HomePage from '../HomePage';
import { render } from '@utils/test-utils';

test('has title', () => {
  const { getByText } = render(<HomePage />);
  expect(getByText('Home Page')).toBeInTheDocument;
});
