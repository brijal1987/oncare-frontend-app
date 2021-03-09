import React from 'react';
import { shallow } from 'enzyme';
import Users from './index';

describe('Users Component', () => {

  it('should render Users component', () => {
    shallow(<Users />);
  });

});
