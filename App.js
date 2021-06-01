/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

//screen
import Home from './src/screens/Home';
import Detail from './src/screens/DetailPage';
import {NavigationContainer} from '@react-navigation/native';
import {HOME_SCREEN, DETAIL_SCREEN} from './src/constants/routes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={HOME_SCREEN}>
        <Stack.Screen name={HOME_SCREEN} component={Home} />
        <Stack.Screen name={DETAIL_SCREEN} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
