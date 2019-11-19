import React from 'react';
import { shallow } from 'enzyme';
import { AddItemScreen } from '../AddItemScreen';
import { TextInput } from 'react-native';
import renderer from 'react-test-renderer';

describe('AddItemScreen', () => {
    const component = shallow (
        <AddItemScreen />
    );

    it('should render properly', () => {
        expect(component).toMatchSnapshot();
    });
});
