import React, {useState} from 'react';
import image from '@corporateFoods/utils/image';
import fonts from '@corporateFoods/utils/fonts';
import string from '@corporateFoods/utils/string';
import {colors} from '@corporateFoods/utils/colors';
import {useNavigation} from '@react-navigation/native';
import {vh, vw} from '@corporateFoods/utils/dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomInput from '@corporateFoods/components/customInput';
import HideKeyboard from '@corporateFoods/components/hideKeyboard';
import CustomButton from '@corporateFoods/components/customButton';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import HeaderComponent from '@corporateFoods/components/headerComponent';
import ScreenNames from '@corporateFoods/router/screenNames';
import {validateEmail} from '@corporateFoods/utils/validation';

export default function ResetPassword() {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsvalidEmail] = useState({
    status: true,
    msg: '',
    proceed: false,
  });
  const arrowPress = React.useCallback(() => {
    navigation.goBack();
  }, []);
  const setEmailState = React.useCallback((value: string) => {
    setEmail(value);
  }, []);
  const onEmailInputBlur = React.useCallback(() => {
    const checkisValidEmail = validateEmail(email.trim());
    setIsvalidEmail(checkisValidEmail);
  }, [email]);

  const screenComponents = () => {
    return (
      <View style={styles.mainView}>
        <HeaderComponent
          leftImage={image.back}
          leftContainerStyle={styles.headerButtonContainer}
          onLeftButtonPress={arrowPress}
          leftImageContainerStyle={styles.headerLeftImageStyle}
        />
        <View style={styles.resetView}>
          <Text style={styles.resetPassword}>{string.resetPassword}</Text>
          <Text style={styles.resetDescription}>{string.resetText}</Text>
        </View>
        <View style={{height: '10%'}}>
          <CustomInput
            setText={setEmailState}
            value={email}
            focusColor={colors.orange}
            borderWidth={0.5}
            onBlur={onEmailInputBlur}
            placeholder={string.emailPlaceHolder}
            notFocussedColor={colors.grayLight1}
            customInputStyle={styles.inputContainerStyle}
          />
          {isValidEmail.status == false ? (
            <Text style={{fontSize: 15, color: 'red'}}>{isValidEmail.msg}</Text>
          ) : (
            ''
          )}
        </View>
        <CustomButton
          buttonText={'SEND NEW PASSWORD'}
          // onPress={() => {
          //   const checkisValidEmail = validateEmail(email.trim());
          //   setIsvalidEmail(checkisValidEmail);
          //   if (checkisValidEmail.status)
          //     navigation.navigate(ScreenNames.PROFILE);
          // }}
          onPress={() => {
            navigation.navigate(ScreenNames.PROFILE);
          }}
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
  headerLeftImageStyle: {
    height: '40%',
  },
  inputContainerStyle: {
    borderRadius: vw(10),
    height: vh(50),
  },
  buttonContainerStyle: {
    marginHorizontal: vw(20),
    marginVertical: vh(50),
  },
  buttonText: {
    fontFamily: fonts.SemiBold,
  },
  resetPassword: {
    fontFamily: fonts.SemiBold,
    fontSize: vw(36),
    color: colors.blackDark,
    marginVertical: vh(20),
  },
  resetDescription: {
    fontSize: vw(14),
    fontFamily: fonts.Regular,
    color: colors.blackLight2,
  },
  resetView: {
    marginVertical: vh(30),
    // marginTop: vh(20),
  },
  mainView: {flex: 1, paddingHorizontal: vw(26)},
});
