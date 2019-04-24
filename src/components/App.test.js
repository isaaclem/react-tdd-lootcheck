import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a wallet component', () => {
    // console.log(app.debug());
    expect(app.find('ConnectFunction').exists()).toBe(true);
  });

  it('contains a Loot component', () => {
    expect(app.find('ConnectFunction').exists()).toBe(true);
  })
});

