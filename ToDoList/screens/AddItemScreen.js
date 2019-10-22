import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import MainButton from '../components/MainButton';

export default function AddItemScreen(props) {
    const [enteredValue, setEnteredValue] = useState();

    const itemInputHandler = (inputText) => {
        setEnteredValue(inputText);
    }

    const resetInputHandler = () => {
        setEnteredValue('');
    }

    const onAddItemHandler = () => {
        props.navigation.navigate({
            routeName: 'Main',
            params: {
                title: enteredValue
            }
        });
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Enter Name:</Text>
            <TextInput 
                style={styles.input} 
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                maxLength={10}
                onChangeText={itemInputHandler}
                value={enteredValue}
            />
            <View style={styles.buttonContainer}>
                <MainButton onPress={onAddItemHandler}>Add</MainButton>
                <MainButton onPress={resetInputHandler}>Reset</MainButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        width: "80%",
        flexDirection: "row",
        alignSelf: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    },
    text: {
        width: "80%",
        flexDirection: "row",
        alignSelf: 'center',
        fontFamily: 'lato'
    },
    screen: {
        marginTop: "10%",
        flex: 1,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-evenly",
        paddingHorizontal: 15
    }
});
