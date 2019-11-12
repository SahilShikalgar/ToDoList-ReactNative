import React from 'react';
import { shallow } from 'enzyme';
import MainButton from '../MainButton';
import { TouchableOpacity, TouchableNativeFeedback } from 'react';

describe('Main Button Component', () => {
    const goToMainScreen = jest.fn();
    const Ionicons = jest.fn();
    const component = shallow(
        <MainButton onPress={goToMainScreen} Ionicons={Ionicons}>
            NEXT
        </MainButton>
    );

    it('should renderer properly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should render TouchableNativeFeedback for Platform.Version >= 21', () => {
        // console.log(component);
        // expect(typeof component.ButtonComponent).toBe(TouchableOpacity);
        console.log(component);
    });
});
