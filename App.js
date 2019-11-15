import React from 'react';
import ToDoNavigator from './navigator/ToDoNavigator';
import { createStore, combineReducers } from 'redux';
import appReducer from './redux/app.reducer';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from "redux-persist";
import storeConstants from './redux.config';
import { AsyncStorage } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: "root",    
  storage: AsyncStorage
};
const rootReducer = combineReducers({
  toDo: appReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, storeConstants.DEF_STORE);
const persistor = persistStore(store);
const getPersistor = () => persistor;
const getStore = () => store;

export default function App() {
  const myStore = getStore();
  const myPersistor = getPersistor();
        
  return (
    <Provider store={ myStore }>
      <PersistGate loading={null} persistor={myPersistor} >
        <ToDoNavigator />
      </PersistGate>
    </Provider>
  );
}
