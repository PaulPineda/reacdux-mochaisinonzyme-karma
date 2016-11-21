import React from 'react';                 // requires to get the test to work. we can get round this later with more configuration
import { shallow } from 'enzyme';          // method from enzyme which allows us to shallow render
import Root from 'containers/Root';    // new import without the need for long relative path
//import Root from '../../src/containers/Root';  // our soon to be component

describe('(Container) Root', () => {
  const wrapper = shallow(<Root />);

  it('renders a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('has a style with a height 100%', () => {
    const expectedStyles = {
      height: '100%',
      background: '#333'
    }
    expect(wrapper.prop('style')).to.eql(expectedStyles);
  });

  it('contains a header explaining the app', () => {
    expect(wrapper.find('.welcome-header')).to.have.length(1);
  });
});
