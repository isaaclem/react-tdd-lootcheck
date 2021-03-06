import React from 'react';
import { shallow, mount } from 'enzyme';
import { Loot } from './Loot';

describe('Loot', () => {
  const mockFetchBitcoin = jest.fn();
  let props = { balance: 10, bitcoin: {}, fetchBitcoin: mockFetchBitcoin };
  let loot = shallow(<Loot {...props} />);

  it('renders properly', () => {
    expect(loot).toMatchSnapshot();
  });

  it('dispatch a `fetchBitcoin()` method it receives from props', () => {
    expect(mockFetchBitcoin).toHaveBeenCalled();
  });

  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      props = { balance: 10, bitcoin: { bpi: { USD: { rate: '1,000' }} }, fetchBitcoin: mockFetchBitcoin };
      loot = shallow(<Loot {...props} />)
    });

    it('display the correct bitcoin value', () => {
      expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01');
    })
  });
})