import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import CustomInput from '@corporateFoods/components/customInput';
import styles from './styles';
import OtpComponent from '@corporateFoods/components/otpComponent';
import image from '@corporateFoods/utils/image';
import HeaderComponent from '@corporateFoods/components/headerComponent';
import string from '@corporateFoods/utils/string';
import {vw} from '@corporateFoods/utils/dimensions';
import HideKeyboard from '@corporateFoods/components/hideKeyboard';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {SET_DATA, SET_LOADING} from '@corporateFoods/utils/actionTypes';

export default function Verification() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const arrowPress = () => {
    if (navigation.canGoBack()) navigation.goBack();
  };

  const onCompleteFill = useCallback((value: string) => {
    dispatch({
      type: SET_DATA,
      payload: {token: 'ABC'},
    });
  }, []);

  const onPressResend = () => {};

  const screenComponents = () => {
    return (
      <View style={styles.mainView}>
        <HeaderComponent
          leftImage={image.back}
          leftContainerStyle={styles.headerButtonContainer}
          onLeftButtonPress={arrowPress}
          leftImageContainerStyle={styles.headerLeftImageStyle}
          extraContainerStyle={{marginBottom: '20%'}}
        />
        <Text style={styles.verificationText}>{string.verificationCode}</Text>
        <Text style={styles.verificationDescription}>
          {string.verificationDecription}
        </Text>

        <OtpComponent
          onCompleteFill={onCompleteFill}
          containerStyle={styles.otpView}
        />
        <Text style={styles.dontRecieveCode}>
          {string.dontRecieveCode}
          <Text style={styles.resend} onPress={onPressResend}>
            {string.pleaseResend}
          </Text>
        </Text>
      </View>
    );
  };
  return (
    <ImageBackground
      style={styles.container}
      source={image.backgroundWrapper}
      resizeMode={'stretch'}>
      <SafeAreaView style={styles.safeView}>
        <HideKeyboard>{screenComponents()}</HideKeyboard>
      </SafeAreaView>
    </ImageBackground>
  );
}
