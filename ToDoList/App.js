import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import ToDoNavigator from './navigator/ToDoNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'lato': require('./assets/fonts/Lato-Regular.ttf'),
    'lato-bold': require('./assets/fonts/Lato-Bold.ttf')
  });
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => { setDataLoaded(true) }}
        onError={(err) => { console.log(err) }}
      />
    );
  }

  return (
      <ToDoNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
