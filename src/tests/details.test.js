import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Details from '../pages/Details';

it('renders correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Details />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
