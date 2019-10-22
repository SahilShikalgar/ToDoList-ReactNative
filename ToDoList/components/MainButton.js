import React from 'react'
import { TouchableOpacity, TouchableNativeFeedback, Platform, StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/Colors';

export default function MainButton(props) {
    let ButtonComponent = TouchableOpacity;

    if (Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 45,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontFamily: 'lato',
        fontSize: 24,
        textAlign: 'center'
    }
});
