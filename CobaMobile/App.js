import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserBox from './src/components/UserBox'
import UserForm from './src/components/UserForm'


import rootReducer from './src/reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './src/sagas/users'

const sagaMiddleware = createSagaMiddleware()
const enhancer = compose(applyMiddleware(sagaMiddleware))
const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(rootSaga)

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={UserBox} />
          <Stack.Screen name="Add" component={UserForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;