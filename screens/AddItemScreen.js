import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import MainButton from '../components/MainButton';
import { addListItem } from '../redux/app.actions';
import { connect } from 'react-redux';

const AddItemScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [showWarning, setShowWarning] = useState();

    const itemInputHandler = (inputText) => {
        setEnteredValue(inputText);
        setShowWarning(false);
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setShowWarning(false);
    }

    const onAddItemHandler = () => {
        if (enteredValue.length === 0) {
            setShowWarning(true);
            return;
        }
        props.addItem(enteredValue)
        props.navigation.navigate({routeName: 'Main'});
    }

    let marginStyle = { marginTop: 20 };

    if (!showWarning) {
        marginStyle = { marginVertical: 20 }
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Enter Name:</Text>
            <TextInput 
                style={{...styles.input, ...marginStyle }} 
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                maxLength={40}
                onChangeText={itemInputHandler}
                value={enteredValue}
            />
            { showWarning ? <Text style={styles.warningText}>Name can't be blank!</Text> : null }
            <View style={styles.buttonContainer}>
                <MainButton onPress={onAddItemHandler} style={{width: "40%"}}>Add</MainButton>
                <MainButton onPress={resetInputHandler} style={{width: "40%"}}>Reset</MainButton>
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
        borderBottomWidth: 1
    },
    warningText: {
        marginBottom: 10,
        color: 'red'
    },
    text: {
        width: "80%",
        flexDirection: "row",
        alignSelf: 'center',
        fontFamily: 'lato',
        fontSize: 16
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
const mapDisptchToProps = (dispatch) => ({
    addItem: (data) => {
        dispatch(addListItem(data))
    }
})
export default connect(null, mapDisptchToProps)(AddItemScreen);