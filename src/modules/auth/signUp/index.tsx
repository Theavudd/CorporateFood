import styles from './styles';
import React, {useState, useCallback} from 'react';
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
  Text,
  TextInput,
  View,
} from 'react-native';
import HeaderComponent from '@corporateFoods/components/headerComponent';
import {vh} from '@corporateFoods/utils/dimensions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  vaildatePassword,
  validateEmail,
  validateName,
} from '@corporateFoods/utils/validation';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
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
  const [isValidPassword, setIsValidPassword] = useState({
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
  const setPasswordState = useCallback((value: string) => {
    setPassword(value);
  }, []);
  const setShowPasswordState = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const showBackButton: boolean =
    params?.showBackButton !== undefined ? params?.showBackButton : true;

  // useEffect(() => {
  //   Services.postApiCall(
  //     '/api/signup',
  //     {
  //       name: 'Satyam Kumar Tiwari',
  //       email: 'samtydg@gmail.com',
  //       password: 'Test@123',
  //       accountType: 1,
  //       employeeId: 'AI95755',
  //       companyName: 'Appinventiv',
  //     },
  //     (resp: any) => {
  //       console.log('res', resp);
  //     },
  //     (error: any) => {
  //       console.log('error', error);
  //     },
  //   );

  // }, []);

  const onPressSignIn = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else navigation.navigate(ScreenNames.LOGIN);
  };

  const socialSignInComponent = () => {
    return (
      <View>
        <View style={styles.socialSignInView}>
          <View style={styles.midLine} />
          <Text style={styles.socialSignInText}>{string.signUpWith}</Text>
          <View style={styles.midLine} />
        </View>

        <CustomButton
          onPress={() => {}}
          buttonText={string.google}
          leftImage={image.google}
          extraLeftImageContainerStyle={{height: '40%'}}
          containerStyle={styles.googleButtonContainerStyle}
          textStyle={styles.googleSignInText}
        />
      </View>
    );
  };
  const onNameInputBlur = React.useCallback(() => {
    const checkisValidName = validateName(name.trim());
    setIsvalidName(checkisValidName);
  }, [name]);

  const fullNameComponent = () => {
    return (
      <View style={{height: '15%'}}>
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
      <View style={{height: '15%'}}>
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
  const onPasswordBlur = React.useCallback(() => {
    const checkisValidPassword = vaildatePassword(password.trim());
    setIsValidPassword(checkisValidPassword);
  }, [password]);
  const passwordComponent = () => {
    return (
      <View style={{height: '15%'}}>
        <Text style={styles.inputName}>{string.password}</Text>
        <CustomInput
          value={password}
          setText={setPasswordState}
          placeholder={string.password}
          borderWidth={0.5}
          onBlur={onPasswordBlur}
          rightIcon={!showPassword ? image.password : image.hidePassword}
          rightIconContainerStyle={styles.eyeContainer}
          rightIconStyle={styles.eyeImage}
          onRightIconPress={setShowPasswordState}
          takeIconsInsideBorder
          containerStyle={styles.inputContainerStyle}
          focusColor={colors.orange}
          notFocussedColor={colors.grayLight1}
          secureTextInput={showPassword}
          maximumLength={16}
        />
        {isValidPassword.status == false ? (
          <Text style={{fontSize: 15, color: 'red'}}>
            {isValidPassword.msg}
          </Text>
        ) : (
          ''
        )}
      </View>
    );
  };

  const arrowPress = React.useCallback(() => {
    navigation.goBack();
  }, []);

  const onSignupPress = useCallback(() => {
    const checkisValidEmail = validateEmail(email.trim());
    setIsvalidEmail(checkisValidEmail);
    const checkisValidPassword = vaildatePassword(password.trim());
    setIsValidPassword(checkisValidPassword);
    const checkisValidName = validateName(name.trim());
    setIsvalidName(checkisValidName);
    if (
      checkisValidEmail.status &&
      checkisValidName.status &&
      checkisValidPassword.status
    ) {
      navigation.navigate(ScreenNames.CHOICE, {name, email, password});
    }
  }, [email, password, name]);

  const screenComponents = () => {
    return (
      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <HideKeyboard>
          <View
            style={[styles.mainView, !showBackButton && {marginTop: vh(20)}]}>
            {showBackButton && (
              <HeaderComponent
                leftImage={image.back}
                leftContainerStyle={styles.headerButtonContainer}
                onLeftButtonPress={arrowPress}
                leftImageContainerStyle={styles.headerLeftImageStyle}
              />
            )}
            <Text style={styles.signUp}>{string.signUp}</Text>
            {fullNameComponent()}
            {emailComponent()}
            {passwordComponent()}
            <CustomButton
              buttonText={string.SIGNUP}
              onPress={onSignupPress}
              containerStyle={styles.buttonContainerStyle}
              textStyle={styles.buttonText}
            />

            <Text style={styles.alreadyHaveAccount}>
              {string.alreadyHaveAccount}
              <Text style={styles.logIn} onPress={onPressSignIn}>
                {string.login}
              </Text>
            </Text>
            {socialSignInComponent()}
          </View>
        </HideKeyboard>
      </KeyboardAwareScrollView>
    );
  };
  return (
    <ImageBackground
      style={{flex: 1}}
      source={image.backgroundWrapper}
      resizeMode={'stretch'}>
      <SafeAreaView style={styles.safeView}>{screenComponents()}</SafeAreaView>
    </ImageBackground>
  );
}
