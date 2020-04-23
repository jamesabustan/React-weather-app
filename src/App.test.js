import React from 'react';
import App from './App';
import WeatherTitle from './components/weather';
import Form from './components/form';
import Weather from './components/weather';
import Homepage from './container/Homepage';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

test('Does App render homepage', () => {
  const wrapper = mount(<App />)
  expect(wrapper.find(".App").length).toEqual(1);
});

test('Does Homepage container load', () => {
    const wrapper = shallow(<Homepage />)
    expect(wrapper.find(".HomePage").length).toEqual(1);
  });

test('Does form component load', () => {
    const wrapper = shallow(<Form />)
    expect(wrapper.find(".formComponent").length).toEqual(1);
  });
  

  
test('Does weather results load', () => {
      const wrapper = mount(<Weather />)
      expect(wrapper.find(".weatherComponent").length).toEqual(1);
  });
