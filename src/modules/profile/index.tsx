// import {ImageBackground, Platform, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import image from '@corporateFoods/utils/image';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import HideKeyboard from '@corporateFoods/components/hideKeyboard';
// import HeaderComponent from '@corporateFoods/components/headerComponent';
// import {useNavigation} from '@react-navigation/native';
// import {vh, vw} from '@corporateFoods/utils/dimensions';
// import {colors} from '@corporateFoods/utils/colors';

// export default function ProfileScreen() {
//   const screenComponents = () => {
//     const navigation = useNavigation<any>();
//     const arrowPress = React.useCallback(() => {
//       navigation.goBack();
//     }, []);
//     return (
//       <View>
//         <HeaderComponent
//           leftImage={image.back}
//           leftContainerStyle={styles.headerButtonContainer}
//           onLeftButtonPress={arrowPress}
//           leftImageContainerStyle={styles.headerLeftImageStyle}
//         />
//         <View style={styles.profileContainer}></View>
//       </View>
//     );
//   };

//   return (
//     <ImageBackground
//       style={styles.mainView}
//       resizeMode="stretch"
//       source={image.profile}>
//       <SafeAreaView style={styles.safeView}>
//         <HideKeyboard>{screenComponents()}</HideKeyboard>
//       </SafeAreaView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   mainView: {
//     flex: 1,
//   },
//   headerButtonContainer: {
//     backgroundColor: 'white',
//     height: vh(38),
//     borderRadius: vw(10),
//     marginHorizontal: vw(26),
//   },
//   headerLeftImageStyle: {height: '40%'},
//   safeView: {
//     flex: 1,
//   },
//   profileContainer: {
//     height: vw(120),
//     width: vw(120),
//     backgroundColor: colors.yellowLight1,
//     borderRadius: vw(100),
//     borderWidth: vw(8),
//     borderColor: colors.white,
//     alignSelf: 'center',
//     marginTop: Platform.OS == 'ios' ? vh(35) : vh(60),
//   },
// });

import React, {useState, useCallback, useEffect} from 'react';
import image from '@corporateFoods/utils/image';
import string from '@corporateFoods/utils/string';
import {colors} from '@corporateFoods/utils/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import ScreenNames from '@corporateFoods/router/screenNames';
import CustomInput from '@corporateFoods/components/customInput';
import CustomButton from '@corporateFoods/components/customButton';
import HideKeyboard from '@corporateFoods/components/hideKeyboard';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HeaderComponent from '@corporateFoods/components/headerComponent';
import {SCREEN_HEIGHT, vh, vw} from '@corporateFoods/utils/dimensions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {navigationRef} from '@corporateFoods/utils/navigationService';

import Services from '@corporateFoods/utils/Services';
import {
  validateEmail,
  validateName,
  vaildatePhoneNumber,
} from '@corporateFoods/utils/validation';
import fonts from '@corporateFoods/utils/fonts';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const navigation: any = useNavigation();
  const params: any = useRoute()?.params;
  const [isValidName, setIsvalidName] = useState({
    status: true,
    msg: '',
    proceed: false,
  });
  const [isValidEmail, setIsvalidEmail] = useState({
    status: true,
    msg: '',
    proceed: false,
  });
  const [isValidPhoneNo, setIsValidPhoneNo] = useState({
    status: true,
    msg: '',
    proceed: false,
  });
  const setEmailState = useCallback((value: string) => {
    setEmail(value);
  }, []);
  const setNameState = useCallback((value: string) => {
    setName(value);
  }, []);
  const setPhoneNoState = useCallback((value: string) => {
    setPhoneNo(value);
  }, []);

  const showBackButton: boolean =
    params?.showBackButton !== undefined ? params?.showBackButton : true;

  const onPressSignIn = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else navigation.navigate(ScreenNames.LOGIN);
  };

  const onNameInputBlur = React.useCallback(() => {
    const checkisValidName = validateName(name.trim());
    setIsvalidName(checkisValidName);
  }, [name]);

  const fullNameComponent = () => {
    return (
      <View style={{height: '10%'}}>
        <Text style={styles.inputName}>{string.fullName}</Text>
        <CustomInput
          value={name}
          setText={setNameState}
          placeholder={string.fullName}
          borderWidth={0.5}
          onBlur={onNameInputBlur}
          customInputStyle={styles.inputContainerStyle}
          focusColor={colors.orange}
          notFocussedColor={colors.grayLight1}
        />
        {!isValidName.status ? (
          <Text style={{fontSize: 15, color: 'red'}}>{isValidName.msg}</Text>
        ) : (
          ''
        )}
      </View>
    );
  };
  const onEmailInputBlur = React.useCallback(() => {
    const checkisValidEmail = validateEmail(email.trim());
    setIsvalidEmail(checkisValidEmail);
  }, [email]);
  const emailComponent = () => {
    return (
      <View style={{height: '10%'}}>
        <Text style={styles.inputName}>{string.email}</Text>
        <CustomInput
          value={email}
          setText={setEmailState}
          placeholder={string.email}
          borderWidth={0.5}
          onBlur={onEmailInputBlur}
          customInputStyle={styles.inputContainerStyle}
          focusColor={colors.orange}
          notFocussedColor={colors.grayLight1}
        />
        {isValidEmail.status == false ? (
          <Text style={{fontSize: 15, color: 'red'}}>{isValidEmail.msg}</Text>
        ) : (
          ''
        )}
      </View>
    );
  };
  const onPhoenNoBlur = React.useCallback(() => {
    const checkisValidPhoneNo = vaildatePhoneNumber(phoneNo.trim());
    setIsValidPhoneNo(checkisValidPhoneNo);
  }, [phoneNo]);
  const phoneNoComponent = () => {
    return (
      <View style={{height: '20%'}}>
        <Text style={styles.inputName}>{string.phoneNo}</Text>
        <CustomInput
          value={phoneNo}
          setText={setPhoneNoState}
          placeholder={string.phoneNo}
          borderWidth={0.5}
          onBlur={onPhoenNoBlur}
          containerStyle={styles.inputContainerStyle}
          focusColor={colors.orange}
          notFocussedColor={colors.grayLight1}
          maximumLength={10}
          keyboardType="numeric"
        />
        {isValidPhoneNo.status == false ? (
          <Text style={{fontSize: 15, color: 'red'}}>{isValidPhoneNo.msg}</Text>
        ) : (
          ''
        )}
      </View>
    );
  };

  const arrowPress = React.useCallback(() => {
    navigation.goBack();
  }, []);

  const screenComponents = () => {
    return (
      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <HideKeyboard>
          <View style={styles.mainView}>
            <HeaderComponent
              leftImage={image.back}
              leftContainerStyle={styles.headerButtonContainer}
              onLeftButtonPress={arrowPress}
              leftImageContainerStyle={styles.headerLeftImageStyle}
            />
            <View style={styles.profileContainer} />
            {fullNameComponent()}
            {emailComponent()}
            {phoneNoComponent()}
            {/* <CustomButton
              buttonText={string.SIGNUP}
              onPress={onSignupPress}
              containerStyle={styles.buttonContainerStyle}
              textStyle={styles.buttonText}
            /> */}
          </View>
        </HideKeyboard>
      </KeyboardAwareScrollView>
    );
  };
  return (
    <ImageBackground
      style={{flex: 1}}
      source={image.profile}
      resizeMode={'stretch'}>
      <SafeAreaView style={styles.safeView}>{screenComponents()}</SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainView: {
    // paddingVertical: vh(60),
    paddingHorizontal: vw(26),
    justifyContent: 'space-between',
    minHeight: SCREEN_HEIGHT - vh(220),
  },
  safeView: {
    flex: 1,
  },
  headerLeftContainer: {
    height: vh(38),
    marginHorizontal: 0,
    borderRadius: vw(10),
    backgroundColor: 'white',
  },
  signUp: {
    fontSize: vw(36),
    color: colors.blackDark,
    fontFamily: fonts.SemiBold,
  },
  inputName: {
    color: colors.textGray,
    fontSize: vw(16),
    marginBottom: vh(12),
  },
  inputContainerStyle: {
    height: vh(50),
    borderRadius: vw(10),
  },
  eyeContainer: {
    width: vw(20),
    height: vh(20),
  },
  eyeImage: {
    width: '100%',
    height: '100%',
    tintColor: colors.gray,
  },
  buttonContainerStyle: {
    marginHorizontal: vw(20),
  },
  buttonText: {
    fontFamily: fonts.SemiBold,
  },
  alreadyHaveAccount: {
    alignSelf: 'center',
    color: colors.blackDark,
    fontFamily: fonts.Regular,
  },
  googleButtonContainerStyle: {
    marginHorizontal: vw(20),
    backgroundColor: colors.white,
  },
  googleSignInText: {color: colors.blackDark, fontFamily: fonts.Regular},
  socialSignInText: {
    fontSize: vw(10),
    color: colors.gray,
    marginHorizontal: '6%',
  },
  midLine: {
    width: '35%',
    marginTop: vh(7),
    borderTopWidth: 1,
    borderColor: colors.grayLight1,
  },
  socialSignInView: {
    marginBottom: '7%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logIn: {
    fontSize: vw(14),
    color: colors.orange,
  },
  headerButtonContainer: {
    height: vh(38),
    marginHorizontal: 0,
    borderRadius: vw(10),
    backgroundColor: 'white',
  },
  headerLeftImageStyle: {height: '55%'},
  profileContainer: {
    height: vw(120),
    width: vw(120),
    backgroundColor: colors.yellowLight1,
    borderRadius: vw(100),
    borderWidth: vw(8),
    borderColor: colors.white,
    alignSelf: 'center',
    // marginTop: Platform.OS == 'ios' ? vh(35) : vh(60),
  },
});
