import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from './index';

describe('Login Component', () => {
  const history = {
    push: jest.fn(),
    replace: jest.fn(),
  };

  it('should render Login component', () => {
    shallow(<Login history={history} />);
  });

  it('should render onSubmit method', () => {
    const wrapper = mount(<Login history={history} />);
    const button = wrapper.find('button');
    button.simulate('submit');
    expect(history.push).toHaveBeenCalled();
  });

  it('should call InputChange', async () => {
    const event = { target: { value: '' } };
    const wrapper = mount(<Login history={history} />);
    const input = wrapper.find('input[type="text"]');
    input.at(0).simulate('change', event);
    expect(wrapper.find(<input />));
  });

  it('should call InputPassword', async () => {
    const event = { target: { value: '' } };
    const wrapper = mount(<Login history={history} />);
    const input = wrapper.find('input[type="password"]');
    input.at(0).simulate('change', event);
    expect(wrapper.find(<input />));
  });
});
