import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import image from '@corporateFoods/utils/image';
import HeaderComponent from '@corporateFoods/components/headerComponent';
import {vh, vw} from '@corporateFoods/utils/dimensions';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HideKeyboard from '@corporateFoods/components/hideKeyboard';
import string from '@corporateFoods/utils/string';
import fonts from '@corporateFoods/utils/fonts';
import {colors} from '@corporateFoods/utils/colors';
import CustomInput from '@corporateFoods/components/customInput';
import CustomButton from '@corporateFoods/components/customButton';

export default function ResetPassword() {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const arrowPress = React.useCallback(() => {
    navigation.goBack();
  }, []);
  const setEmailState = React.useCallback((value: string) => {
    setEmail(value);
  }, []);

  const screenComponents = () => {
    return (
      <View>
        <HeaderComponent
          leftImage={image.back}
          leftContainerStyle={styles.headerButtonContainer}
          onLeftButtonPress={arrowPress}
          leftImageContainerStyle={styles.headerLeftImageStyle}
        />
        <View
          style={{
            justifyContent: 'center',
            // alignSelf: 'center',
            marginVertical: vh(40),
            marginHorizontal: vw(26),
          }}>
          <Text
            style={{
              fontFamily: fonts.Regular,
              fontWeight: '600',
              fontSize: 36,
              color: colors.blackDark,
              marginVertical: vh(20),
            }}>
            {string.resetPassword}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: colors.blackLight2,
            }}>
            {string.resetText}
          </Text>
        </View>
        <CustomInput
          setText={setEmailState}
          value={email}
          focusColor={colors.orange}
          borderWidth={0.5}
          placeholder={string.emailPlaceHolder}
          notFocussedColor={colors.grayLight1}
          customInputStyle={styles.inputContainerStyle}
        />
        <CustomButton
          buttonText={'SEND NEW PASSWORD'}
          onPress={() => {}}
          containerStyle={styles.buttonContainerStyle}
          textStyle={styles.buttonText}
        />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeView: {
    flex: 1,
  },
  headerButtonContainer: {
    backgroundColor: 'white',
    marginHorizontal: 0,
    height: vh(38),
    borderRadius: vw(10),
  },
  headerLeftImageStyle: {height: '40%'},
  inputContainerStyle: {
    borderRadius: vw(10),
    height: vh(50),
    marginHorizontal: vw(26),
  },
  buttonContainerStyle: {
    marginHorizontal: vw(20),
    marginVertical: vh(50),
  },
  buttonText: {
    fontFamily: fonts.SemiBold,
  },
});
