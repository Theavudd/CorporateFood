import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../router/screenNames';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Text
        onPress={() => {
          navigation.navigate(ScreenNames.LOGIN);
        }}>
        Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
