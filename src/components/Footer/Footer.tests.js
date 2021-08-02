import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

test('Footer - Render Component', () => {
  const component = renderer.create(
    <Footer></Footer>,
  );
  let footer = component.toJSON();
  expect(footer).toMatchSnapshot();
});