import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {vh, vw} from '@corporateFoods/utils/dimensions';
import {colors} from '@corporateFoods/utils/colors';
import ScreenNames from './screenNames';
import image from '@corporateFoods/utils/image';
import Home from '@corporateFoods/modules/home';
import Notification from '@corporateFoods/modules/notification';
import ProfileScreen from '@corporateFoods/modules/profile';
import Setting from '@corporateFoods/modules/setting';
import Help from '@corporateFoods/modules/help';

const Tab = createBottomTabNavigator();

/**
 * returns bottom stack
 */
function BottomTabNav() {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarStyle: {paddingRight: vw(7)},
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => {
            const tintColor = focused ? colors.orange : colors.gray;
            let iconName, tint, name;
            switch (route.name) {
              case ScreenNames.HOME:
                iconName = image.home;
                name = 'Home';
                tint = tintColor;

                break;
              case ScreenNames.NOTIFICATION:
                iconName = image.bell;
                name = 'Notification';
                tint = tintColor;
                // imgStyle = {
                //   width: vw(20),
                //   height: vw(20),
                // };
                break;
              case ScreenNames.PROFILE:
                iconName = image.user;
                name = 'User';
                tint = tintColor;
                // imgStyle = {
                //   width: vw(20),
                //   height: vw(20),
                // };
                break;
              case ScreenNames.SETTING:
                iconName = image.settings;
                name = 'Settings';
                tint = tintColor;
                // imgStyle = {
                //   width: vw(25),
                //   height: vw(25),
                // };
                break;
              case ScreenNames.HELP:
                iconName = image.help;
                name = 'Help';
                tint = tintColor;
                // imgStyle = {
                //   width: vw(20),
                //   height: vw(20),
                // };
                break;
              default:
                break;
            }

            return (
              <View style={{alignItems: 'center', paddingTop: vh(10)}}>
                <Image
                  style={{
                    tintColor: focused ? colors.orange : colors.gray,
                    height: vw(20),
                    width: vw(20),
                    resizeMode: 'contain',
                  }}
                  source={iconName}
                />
                <Text>{focused ? name : ''}</Text>
              </View>
            );
          },
        })}>
        <Tab.Screen component={Home} name={ScreenNames.HOME} />
        <Tab.Screen component={Notification} name={ScreenNames.NOTIFICATION} />
        <Tab.Screen component={ProfileScreen} name={ScreenNames.PROFILE} />
        <Tab.Screen component={Setting} name={ScreenNames.SETTING} />
        <Tab.Screen component={Help} name={ScreenNames.HELP} />
      </Tab.Navigator>
    </View>
  );
}

export default BottomTabNav;
