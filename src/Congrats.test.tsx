import React from 'react';
import Enzime, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../test/TestUtils';

import Congrats from './Congrats';

Enzime.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
    return shallow(<Congrats{...props} />)
}

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});