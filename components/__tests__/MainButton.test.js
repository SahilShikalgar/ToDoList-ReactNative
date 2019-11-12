import React from 'react';
import { shallow } from 'enzyme';
import MainButton from '../MainButton';
import renderer from 'react-test-renderer';

describe('Main Button Component', () => {
    const goToMainScreen = jest.fn();
    const component = shallow(
        <MainButton onPress={goToMainScreen}>
            NEXT
        </MainButton>
    );

    it('should renderer properly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should call onPress on click', async() => {
        // const onPress = jest.fn();
        // const wrapper = component.instance();
        // wrapper.onPress();
        // expect(onPress).toHaveBeenCalled();
    });
});
