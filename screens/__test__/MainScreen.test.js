import React from 'react';
import { shallow } from 'enzyme';
import { MainScreen, Item } from '../MainScreen';
import MainButton from '../../components/MainButton';
import { View } from 'react-native';

describe('MainScreen', () => {
    const navigation = {
        navigate: jest.fn(),
        getParam: jest.fn()
    }
    const toDo = ["Learn Mock Data"];
    const component = shallow (
        <MainScreen navigation={navigation} toDo={toDo} />
    );

    it('should render properly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should navigate on add click', () => {
        component.find(MainButton).at(0).prop('onPress')();
        expect(navigation.navigate).toHaveBeenCalled();
    });

    it('should load mock Item component', () => {
        const itemComponent = shallow(<Item title={"List Item"} />);
        expect(itemComponent).toMatchSnapshot();
        const view = component.find(View);
        expect(view).toHaveLength(2)
    });
});
