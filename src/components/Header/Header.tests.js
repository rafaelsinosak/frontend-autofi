import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

test('Header - Render Component', () => {
  const component = renderer.create(
    <Header></Header>,
  );
  let header = component.toJSON();
  expect(header).toMatchSnapshot();
});