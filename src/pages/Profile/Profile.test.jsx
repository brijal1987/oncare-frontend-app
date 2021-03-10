import React from 'react';
import { shallow } from 'enzyme';
import Profile from './index';

describe('Profile Component', () => {

  it('should render Profile component', () => {
    shallow(<Profile />);
  });

});
