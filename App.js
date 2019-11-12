import React from 'react';
import ToDoNavigator from './navigator/ToDoNavigator';
import { createStore, combineReducers } from 'redux';
import appReducer from './redux/app.reducer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  toDo: appReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ToDoNavigator />
    </Provider>
  );
}
