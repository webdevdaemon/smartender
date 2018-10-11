import React from 'react';
import renderer from 'react-test-renderer';

import SearchWrapper from '../src/Components/SearchWrapper.js';

describe('<SearchWrapper />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<SearchWrapper />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });