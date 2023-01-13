import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

it('renders correctly', () => {
  const navbar = renderer
    .create(<Router><Navbar /></Router>)
    .toJSON();
  expect(navbar).toMatchSnapshot();
});
