import React from 'react';
import { shallow } from 'enzyme';
import { WelcomeScreen } from '../WelcomeScreen';
import MainButton from '../../components/MainButton'

describe('WelcomeScreen', () => {
    const navigation = {
        navigate: jest.fn()
    }
    const component = shallow (
        <WelcomeScreen navigation={navigation} />
    );

    it('should render properly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Main Button Exists', () => {
        const mainButton = component.find(MainButton)
        expect(mainButton).toHaveLength(1)
    });

    it('Touchable Opacity Exists', () => {
        component.find(MainButton).prop('onPress')()
        expect(navigation.navigate).toHaveBeenCalled()
    })
});
