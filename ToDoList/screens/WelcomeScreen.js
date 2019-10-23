import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MainButton from '../components/MainButton';
 
const WelcomeScreen = (props) => {
    console.log(props);
    const goToMainScreen = () => {
        props.navigation.navigate({routeName: 'Main'});
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Welcome</Text>
            <View style={styles.buttonContainer}>
                <MainButton onPress={goToMainScreen}>NEXT</MainButton>
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
        width: 150,
        borderColor: 'black',
        borderRadius: 25
    }
});

export default WelcomeScreen;
