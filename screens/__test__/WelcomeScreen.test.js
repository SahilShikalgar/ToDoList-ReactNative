import React from 'react';
import { shallow } from 'enzyme';
import WelcomeScreen from '../WelcomeScreen';
import MainButton from '../../components/MainButton';

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

    it('should call goToMainScreen on click', () => {
        
    });
});
