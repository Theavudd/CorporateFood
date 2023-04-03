import {styles} from './styles';
import React, {useState} from 'react';
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
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import HeaderComponent from '@corporateFoods/components/headerComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const params: any = useRoute()?.params;

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

  const emailComponent = () => {
    return (
      <View>
        <Text style={styles.inputName}>{string.email}</Text>
        <CustomInput
          value={email}
          setText={setEmailState}
          placeholder={string.emailPlaceHolder}
          borderWidth={0.5}
          customInputStyle={styles.inputContainerStyle}
          focusColor={colors.orange}
          notFocussedColor={colors.grayLight1}
        />
      </View>
    );
  };

  const setPasswordState = React.useCallback((value: string) => {
    setPassword(value);
  }, []);

  const onEyePress = React.useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const passwordComponent = () => {
    return (
      <View>
        <Text style={styles.inputName}>{string.password}</Text>
        <CustomInput
          value={password}
          borderWidth={0.5}
          rightIcon={!showPassword ? image.password : image.hidePassword}
          rightIconContainerStyle={styles.eyeContainer}
          rightIconStyle={styles.eyeImage}
          onRightIconPress={onEyePress}
          takeIconsInsideBorder
          setText={setPasswordState}
          focusColor={colors.orange}
          placeholder={string.password}
          onRightIconPress={onEyePress}
          secureTextInput={showPassword}
          rightIconStyle={styles.eyeImage}
          notFocussedColor={colors.grayLight1}
          containerStyle={styles.inputContainerStyle}
          rightIconContainerStyle={styles.eyeContainer}
          rightIcon={showPassword ? image.password : image.hidePassword}
        />
      </View>
    );
  };

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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(ScreenNames.RESET);
              }}>
              <Text style={styles.forgotPassword}>{string.forgotPassword}</Text>
            </TouchableOpacity>
            <CustomButton
              buttonText={string.LOGIN}
              onPress={() => {}}
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
    </ImageBackground>
  );
};
export default Login;
