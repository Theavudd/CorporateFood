import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
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

  const onPressLogin = () => {};
  const arrowPress = () => {
    navigation.navigate(ScreenNames.WELCOME);
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
        />
      </View>
    );
  };

  const socialSignInComponent = () => {
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
  };

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
          <Text style={styles.signUp} onPress={onPressLogin}>
            {string.signUp}
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
};
export default Login;
