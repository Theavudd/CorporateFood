// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../modules/splash';
import ScreenNames from './screenNames';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.SPLASH}
          component={SplashScreen}
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
