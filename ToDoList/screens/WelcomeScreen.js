import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MainButton from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons';
 
const WelcomeScreen = (props) => {
    const goToMainScreen = () => {
        props.navigation.navigate({routeName: 'Main'});
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Welcome</Text>
            <View style={styles.buttonContainer}>
                <MainButton onPress={goToMainScreen} style={styles.button}>
                    NEXT&nbsp;
                    <Ionicons name="ios-arrow-dropright" size={24} color="white" />&nbsp;
                </MainButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'lato',
        fontWeight: '100',
        fontSize: 48
    },
    buttonContainer: {
        marginTop: 300,
        borderColor: 'black',
        borderRadius: 25,
        flexDirection: "row"
    },
    button: {
        alignSelf: "center",
        width: "50%"
    }
});

export default WelcomeScreen;
