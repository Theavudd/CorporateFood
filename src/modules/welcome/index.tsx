import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../router/screenNames';

export default function WelcomeScreen() {
  const navigation = useNavigation<any>();
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>WelcomeScreen</Text>
      <Text
        style={{justifyContent: 'center'}}
        onPress={() => {
          navigation.navigate(ScreenNames.LOGIN);
        }}>
        Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
