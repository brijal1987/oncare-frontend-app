import React from 'react';
import { shallow } from 'enzyme';
import Logout from './index';

describe('Logout Component', () => {

  it('should render Logout component', () => {
    shallow(<Logout />);
  });

});
