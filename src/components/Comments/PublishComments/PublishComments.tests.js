import React from 'react';
import renderer from 'react-test-renderer';
import PublishComments from './PublishComments';

test('PublishComments - Render Component', () => {
  const component = renderer.create(
    <PublishComments></PublishComments>,
  );
  let publishComments = component.toJSON();
  expect(publishComments).toMatchSnapshot();
});