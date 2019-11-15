import React from 'react';
import { shallow } from 'enzyme';
import WelcomeScreen from '../WelcomeScreen';

describe('AddItemScreen', () => {
    const component = shallow (
        <WelcomeScreen />
    );

    it('should rendere properly', () => {
        expect(component).toMatchSnapshot();
    });
});
