import styles from './styles';
import React, {useState} from 'react';
import image from '@corporateFoods/utils/image';
import string from '@corporateFoods/utils/string';
import {colors} from '@corporateFoods/utils/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import ScreenNames from '@corporateFoods/router/screenNames';
import CustomInput from '@corporateFoods/components/customInput';
import CustomButton from '@corporateFoods/components/customButton';
import HideKeyboard from '@corporateFoods/components/hideKeyboard';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import HeaderComponent from '@corporateFoods/components/headerComponent';
import {vh} from '@corporateFoods/utils/dimensions';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const navigation: any = useNavigation();
  const params: any = useRoute()?.params;

  const showBackButton: boolean =
    params?.showBackButton !== undefined ? params?.showBackButton : true;

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

  const fullNameComponent = () => {
    return (
      <View>
        <Text style={styles.inputName}>{string.fullName}</Text>
        <CustomInput
          value={name}
          setText={(value: string) => {
            setName(value);
          }}
          placeholder={string.fullName}
          borderWidth={0.5}
          customInputStyle={styles.inputContainerStyle}
          focusColor={colors.orange}
          notFocussedColor={colors.grayLight1}
        />
      </View>
    );
  };
  const emailComponent = () => {
    return (
      <View>
        <Text style={styles.inputName}>{string.email}</Text>
        <CustomInput
          value={email}
          setText={(value: string) => {
            setEmail(value);
          }}
          placeholder={string.emailPlaceHolder}
          borderWidth={0.5}
          customInputStyle={styles.inputContainerStyle}
          focusColor={colors.orange}
          notFocussedColor={colors.grayLight1}
        />
      </View>
    );
  };
  const passwordComponent = () => {
    return (
      <View>
        <Text style={styles.inputName}>{string.password}</Text>
        <CustomInput
          value={password}
          setText={(value: string) => {
            setPassword(value);
          }}
          placeholder={string.password}
          borderWidth={0.5}
          rightIcon={!showPassword ? image.password : image.hidePassword}
          rightIconContainerStyle={styles.eyeContainer}
          rightIconStyle={styles.eyeImage}
          onRightIconPress={() => {
            setShowPassword(!showPassword);
          }}
          takeIconsInsideBorder
          containerStyle={styles.inputContainerStyle}
          focusColor={colors.orange}
          notFocussedColor={colors.grayLight1}
          secureTextInput={showPassword}
          maximumLength={14}
        />
      </View>
    );
  };

  const arrowPress = React.useCallback(() => {
    navigation.goBack();
  }, []);

  const screenComponents = () => {
    return (
      <View style={[styles.mainView, !showBackButton && {marginTop: vh(20)}]}>
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
          onPress={() => {}}
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
    );
  };
  return (
    <ImageBackground
      style={{flex: 1}}
      source={image.backgroundWrapper}
      resizeMode={'stretch'}>
      <SafeAreaView style={styles.safeView}>
        <HideKeyboard>{screenComponents()}</HideKeyboard>
      </SafeAreaView>
    </ImageBackground>
  );
}
