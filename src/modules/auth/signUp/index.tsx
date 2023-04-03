import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import HideKeyboard from '../../../components/hideKeyboard';
import image from '../../../utils/image';
import styles from './styles';
import HeaderComponent from '../../../components/headerComponent';
import string from '../../../utils/string';
import CustomInput from '../../../components/customInput';
import {useState} from 'react';
import {colors} from '../../../utils/colors';
import CustomButton from '../../../components/customButton';
import ScreenNames from '../../../router/screenNames';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const navigation: any = useNavigation();

  const onPressSignIn = () => {};

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
          rightIcon={showPassword ? image.password : image.hidePassword}
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
    navigation.navigate(ScreenNames.WELCOME);
  }, []);

  const screenComponents = () => {
    return (
      <View style={styles.mainView}>
        <HeaderComponent
          leftImage={image.back}
          leftContainerStyle={styles.headerButtonContainer}
          onLeftButtonPress={arrowPress}
          leftImageContainerStyle={styles.headerLeftImageStyle}
        />
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
    <ImageBackground style={{flex: 1}} source={image.backgroundWrapper}>
      <SafeAreaView style={styles.safeView}>
        <HideKeyboard>{screenComponents()}</HideKeyboard>
      </SafeAreaView>
    </ImageBackground>
  );
}
