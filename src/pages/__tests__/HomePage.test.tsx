import React from 'react';
import HomePage from '@pages/HomePage';
import { render, cleanup } from '@utils/test-utils';

afterEach(cleanup);

test('should take a snapshot', () => {
  const { asFragment } = render(<HomePage />);
  expect(asFragment()).toMatchSnapshot();
});
