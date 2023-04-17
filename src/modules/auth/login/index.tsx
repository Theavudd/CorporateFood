import {styles} from './styles';
import React, {useCallback, useState} from 'react';
import fonts from '@corporateFoods/utils/fonts';
import image from '@corporateFoods/utils/image';
import string from '@corporateFoods/utils/string';
import {vh, vw} from '@corporateFoods/utils/dimensions';
import {colors} from '@corporateFoods/utils/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import ScreenNames from '@corporateFoods/router/screenNames';
import CustomInput from '@corporateFoods/components/customInput';
import CustomButton from '@corporateFoods/components/customButton';
import HideKeyboard from '@corporateFoods/components/hideKeyboard';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import HeaderComponent from '@corporateFoods/components/headerComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  vaildatePassword,
  validateEmail,
} from '@corporateFoods/utils/validation';
import Loader from '@corporateFoods/components/loader';
import {useDispatch} from 'react-redux';
import {userLogin} from '../action';
import commonFunction from '@corporateFoods/utils/commonFunction';

const Login = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsvalidEmail] = useState({
    status: true,
    msg: '',
    proceed: false,
  });
  const [loading, setLoading] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState({
    status: true,
    msg: '',
    proceed: false,
  });
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const params: any = useRoute()?.params;
  const dispatch: any = useDispatch();

  const showBackButton: boolean =
    params?.showBackButton !== undefined ? params?.showBackButton : true;

  const onPressSignUp = React.useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else navigation.navigate(ScreenNames.SIGNUP);
  }, []);

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

  const emailComponent = () => {
    return (
      <View style={{height: '10%'}}>
        <Text style={styles.inputName}>{string.email}</Text>
        <CustomInput
          value={email}
          setText={setEmailState}
          onBlur={onEmailInputBlur}
          placeholder={string.emailPlaceHolder}
          borderWidth={0.5}
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

  const setPasswordState = React.useCallback((value: string) => {
    setPassword(value);
  }, []);

  const onEyePress = React.useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const onPasswordBlur = React.useCallback(() => {
    const checkisValidPassword = vaildatePassword(password.trim());
    setIsValidPassword(checkisValidPassword);
  }, [password]);

  const passwordComponent = () => {
    return (
      <View style={{height: '10%'}}>
        <Text style={styles.inputName}>{string.password}</Text>
        <CustomInput
          value={password}
          setText={setPasswordState}
          onBlur={onPasswordBlur}
          placeholder={string.password}
          borderWidth={0.5}
          rightIcon={!showPassword ? image.password : image.hidePassword}
          rightIconContainerStyle={styles.eyeContainer}
          rightIconStyle={styles.eyeImage}
          onRightIconPress={onEyePress}
          takeIconsInsideBorder
          containerStyle={styles.inputContainerStyle}
          focusColor={colors.orange}
          notFocussedColor={colors.grayLight1}
          secureTextInput={showPassword}
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
  const onLoginValidation = useCallback(() => {
    const checkisValidEmail = validateEmail(email.trim());
    setIsvalidEmail(checkisValidEmail);
    const checkisValidPassword = vaildatePassword(password.trim());
    setIsValidPassword(checkisValidPassword);
    if (checkisValidEmail.status && checkisValidPassword.status) {
      let params = {
        email,
        password,
      };
      setLoading(true);
      dispatch(
        userLogin(
          params,
          (res: any) => {
            setLoading(false);
            console.log('res', res);
          },
          (err: any) => {
            setLoading(false);
            console.log('failed', err);
            commonFunction.showSnackbar(err?.data?.message);
          },
        ),
      );
    }
  }, [email, password]);

  const socialSignInComponent = React.useCallback(() => {
    return (
      <View>
        <View style={styles.socialSignInView}>
          <View style={styles.midLine} />
          <Text style={styles.socialSignInText}>{string.signInWith}</Text>
          <View style={styles.midLine} />
        </View>

        <CustomButton
          onPress={() => {}}
          buttonText={string.google}
          leftImage={image.google}
          extraLeftImageContainerStyle={{height: '40%'}}
          containerStyle={{
            backgroundColor: colors.white,
            marginHorizontal: vw(20),
          }}
          textStyle={{color: colors.blackDark, fontFamily: fonts.Regular}}
        />
      </View>
    );
  }, []);

  const onForgotPasswordPress = () => {
    navigation.navigate(ScreenNames.RESET);
  };

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
            <Text style={styles.login}>{string.login}</Text>
            {emailComponent()}
            {passwordComponent()}
            <TouchableOpacity onPress={onForgotPasswordPress}>
              <Text style={styles.forgotPassword}>{string.forgotPassword}</Text>
            </TouchableOpacity>
            <CustomButton
              buttonText={string.LOGIN}
              onPress={onLoginValidation}
              containerStyle={styles.buttonContainerStyle}
              textStyle={styles.buttonText}
            />
            <Text style={styles.dontHaveAccount}>
              {string.dontHaveAccount}
              <Text style={styles.signUp} onPress={onPressSignUp}>
                {string.signUp}
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
      style={styles.container}
      source={image.backgroundWrapper}
      resizeMode={'stretch'}>
      <SafeAreaView style={styles.safeView}>{screenComponents()}</SafeAreaView>
      {loading && <Loader />}
    </ImageBackground>
  );
};
export default Login;
