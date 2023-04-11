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
import {InteractionManager, useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../modules/welcome';
import Login from '../modules/auth/login';
import SignUp from '../modules/auth/signUp';
import ResetPassword from '@corporateFoods/modules/auth/resetPassword';
import Verification from '../modules/auth/verification';
import {useSelector} from 'react-redux';
import {ReducersModal} from '@corporateFoods/utils/modal';
import Home from '@corporateFoods/modules/home';
import commonFunction from '@corporateFoods/utils/commonFunction';
import ProfileScreen from '@corporateFoods/modules/profile';
import Choice from '@corporateFoods/modules/auth/choice';

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};

function Router() {
  const scheme = useColorScheme();

  InteractionManager.runAfterInteractions(() => {
    commonFunction.linearAnimation();
  });

  const {token, isLoading} = useSelector((store: ReducersModal) => ({
    token: store.AuthReducer.authToken,
    isLoading: store.SplashReducer.isLoading,
  }));

  const Mytheme = {
    ...DefaultTheme,
    colors: {...DefaultTheme.colors, text: 'red'},
  };

  if (isLoading) return <SplashScreen />;

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : Mytheme}>
      <Stack.Navigator screenOptions={screenOptions}>
        {!token ? (
          <>
            <Stack.Screen
              name={ScreenNames.WELCOME}
              component={WelcomeScreen}
            />
            <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
            <Stack.Screen name={ScreenNames.SIGNUP} component={SignUp} />
            <Stack.Screen name={ScreenNames.RESET} component={ResetPassword} />
            <Stack.Screen name={ScreenNames.CHOICE} component={Choice} />
            <Stack.Screen
              name={ScreenNames.VERIFICATION}
              component={Verification}
            />
            <Stack.Screen
              name={ScreenNames.PROFILE}
              component={ProfileScreen}
            />
          </>
        ) : (
          <Stack.Screen name={ScreenNames.BOTTOM} component={BottomTabNav} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    <BottomTab.Navigator screenOptions={screenOptions}>
      <BottomTab.Screen name={ScreenNames.HOME} component={Home} />
    </BottomTab.Navigator>
  );
}

export default Router;
