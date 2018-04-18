import React from 'react';
import renderer from 'react-test-renderer';

import Page from '../src/Components/Page.js';

describe('<Page />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<Page />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });