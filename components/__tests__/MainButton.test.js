import React from 'react';
import { shallow } from 'enzyme';
import MainButton from '../MainButton';
import { TouchableOpacity } from 'react-native';

describe('Main Button Component', () => {
    const goToMainScreen = jest.fn();
    const component = shallow (
        <MainButton onPress={goToMainScreen}>
            NEXT
        </MainButton>
    );

    it('should renderer properly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should call onPress on click', async() => {
        const wrapper = component.find(TouchableOpacity);
        wrapper.getElement().props.onPress()
        expect(goToMainScreen).toHaveBeenCalled();
    });
});
