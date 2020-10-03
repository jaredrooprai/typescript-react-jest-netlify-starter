import React from 'react';
import HomePage from '@pages/HomePage';
import { fireEvent, render } from '@utils/test-utils';
import axios from 'axios';

test('has title', () => {
  const { debug, getByText } = render(<HomePage />);
  fireEvent.click(getByText('Load User'));

  debug();
  expect(getByText('Home Page')).toBeInTheDocument;
});
