import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Fonts from '../../utils/fonts';

export default function SplashScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{fontFamily: Fonts.Regular}}>SplashScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
