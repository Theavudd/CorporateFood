import React, {useState} from 'react';
import {Text, View, SafeAreaView, ImageBackground} from 'react-native';
import CustomButton from '../../../components/customButton';
import CustomInput from '../../../components/customInput';
import HeaderComponent from '../../../components/headerComponent';
import HideKeyboard from '../../../components/hideKeyboard';
import {colors} from '../../../utils/colors';
import {vh, vw} from '../../../utils/dimensions';
import fonts from '../../../utils/fonts';
import image from '../../../utils/image';
import string from '../../../utils/string';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../../router/screenNames';

const Login = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onPressSignUp = React.useCallback(() => {
    navigation.navigate(ScreenNames.SIGNUP);
  }, []);

  const arrowPress = React.useCallback(() => {
    navigation.navigate(ScreenNames.WELCOME);
  }, []);

  const setEmailState = React.useCallback((value: string) => {
    setEmail(value);
  }, []);

  const emailComponent = React.useCallback(() => {
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
  }, [email]);

  const setPasswordState = React.useCallback((value: string) => {
    setPassword(value);
  }, []);

  const onEyePress = React.useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const passwordComponent = React.useCallback(() => {
    return (
      <View>
        <Text style={styles.inputName}>{string.password}</Text>
        <CustomInput
          value={password}
          setText={setPasswordState}
          placeholder={string.password}
          borderWidth={0.5}
          rightIcon={showPassword ? image.password : image.hidePassword}
          rightIconContainerStyle={styles.eyeContainer}
          rightIconStyle={styles.eyeImage}
          onRightIconPress={onEyePress}
          takeIconsInsideBorder
          containerStyle={styles.inputContainerStyle}
          focusColor={colors.orange}
          notFocussedColor={colors.grayLight1}
          secureTextInput={showPassword}
        />
      </View>
    );
  }, [password, showPassword]);

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
      <View style={styles.mainView}>
        <HeaderComponent
          leftImage={image.back}
          leftContainerStyle={{
            backgroundColor: 'white',
            marginHorizontal: 0,
            height: vh(38),
            borderRadius: vw(10),
          }}
          onLeftButtonPress={arrowPress}
          leftImageContainerStyle={{height: '40%'}}
        />
        <Text style={styles.login}>{string.login}</Text>
        {emailComponent()}
        {passwordComponent()}
        <Text style={styles.forgotPassword}>{string.forgotPassword}</Text>
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
};
export default Login;
