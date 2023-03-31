// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import SplashScreen from '../modules/splash';
import ScreenNames from './screenNames';
import {useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../modules/welcome';
import Login from '../modules/auth/login';

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};

function Router() {
  const scheme = useColorScheme();
  const Mytheme = {
    ...DefaultTheme,
    colors: {...DefaultTheme.colors, text: 'red'},
  };

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : Mytheme}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={ScreenNames.SPLASH} component={SplashScreen} />
        <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
        <Stack.Screen name={ScreenNames.WELCOME} component={WelcomeScreen} />
        <Stack.Screen name={ScreenNames.BOTTOM} component={BottomTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    <BottomTab.Navigator screenOptions={screenOptions}>
      {/* <BottomTab.Screen name={ScreenNames.HOME} component={Home} /> */}
    </BottomTab.Navigator>
  );
}

export default Router;
