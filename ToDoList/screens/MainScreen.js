import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MainButton from '../components/MainButton';
import { FlatList } from 'react-native-gesture-handler';

export default function MainScreen(props) {
    const [toDoList, setToDoList] = useState([]);
    const title = props.navigation.getParam('title');
    const [itemAddedStatus, setItemAddedStatus] = useState(false);

    if (!itemAddedStatus) {
        setToDoList([...toDoList, title]);
        setItemAddedStatus(true);
        // use localStorage or Redux
    }

    const onPressHandler = () => {
        props.navigation.navigate('AddItem');
    }

    return (
        <View style={styles.screen}>
            <MainButton onPress={onPressHandler}>
                <Ionicons name="md-add" size={24} color="white" />&nbsp;
                ADD
            </MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        flexDirection: 'row'
    }
});
