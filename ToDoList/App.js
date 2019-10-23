import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import ToDoNavigator from './navigator/ToDoNavigator';
import { createStore, combineReducers } from 'redux';
import appReducer from './redux/app.reducer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  toDo: appReducer
});

const store = createStore(rootReducer);

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
    <Provider store={store}>
      <ToDoNavigator />
    </Provider>
  );
}
