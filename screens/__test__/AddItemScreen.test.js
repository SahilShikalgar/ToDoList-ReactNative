import React from 'react';
import { shallow } from 'enzyme';
import AddItemScreen from '../AddItemScreen';

describe('AddItemScreen', () => {
    const component = shallow (
        <AddItemScreen />
    );

    it('should rendere properly', () => {
        expect(component).toMatchSnapshot();
    });
});