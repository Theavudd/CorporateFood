import React from 'react';
import image from '../../utils/image';
import fonts from '../../utils/fonts';
import {colors} from '../../utils/colors';
import ScreenNames from '../../router/screenNames';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/customButton';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH, vh, vw} from '../../utils/dimensions';
import string from '../../utils/string';
export default function WelcomeScreen() {
  const navigation = useNavigation<any>();
  const onSkipPress = () => {
    navigation.navigate(ScreenNames.LOGIN);
  };

  const loginButtons = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: vh(60),
          flex: 0.3,
          width: '100%',
        }}>
        <CustomButton
          onPress={() => {}}
          buttonText={string.google}
          leftImage={image.google}
          extraLeftImageContainerStyle={{height: '40%'}}
          containerStyle={{
            backgroundColor: colors.white,
            // width: '85%',
            marginHorizontal: vw(25),
          }}
          textStyle={{color: colors.blackDark, fontFamily: fonts.SemiBold}}
        />
        <CustomButton
          onPress={() => {}}
          buttonText={string.loginWithEmail}
          extraLeftImageContainerStyle={{height: '40%'}}
          containerStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.21)',
            borderWidth: 1,
            borderColor: colors.white,
            marginVertical: vh(23),
            marginHorizontal: vw(25),
          }}
          textStyle={{color: colors.white, fontFamily: fonts.Regular}}
        />
        <Text style={styles.dontHaveAccount}>
          {string.dontHaveAccount}
          <Text style={styles.signUp} onPress={() => {}}>
            {string.login}
          </Text>
        </Text>
      </View>
    );
  };
  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.main}
      source={image.welcome}>
      <SafeAreaView style={{flex: 1, marginTop: vh(40)}}>
        <CustomButton
          onPress={onSkipPress}
          buttonText="Skip"
          containerStyle={styles.skipbtn}
          textStyle={{color: colors.orange}}
        />
        <View
          style={{
            alignSelf: 'center',
            marginTop: vh(50),
          }}>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.corporate}>Corporate Food</Text>
        </View>
        {loginButtons()}
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  skipbtn: {
    height: vh(30),
    width: vw(58),
    marginHorizontal: vw(30),
    alignSelf: 'flex-end',
    backgroundColor: colors.white,
  },
  welcome: {
    color: colors.blackDark,
    fontSize: vw(50),
    fontWeight: '700',
    fontFamily: fonts.Regular,
  },
  corporate: {
    color: colors.orange,
    fontFamily: fonts.SemiBold,
    fontSize: vw(45),
  },
  socialSignInText: {
    marginHorizontal: '6%',
    fontSize: vw(10),
    color: colors.gray,
  },
  midLine: {
    width: '35%',
    borderTopWidth: 1,
    marginTop: vh(7),
    borderColor: colors.grayLight1,
  },
  socialSignInView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '7%',
  },
  buttonText: {
    fontFamily: fonts.SemiBold,
  },
  signUp: {
    fontSize: vw(14),
    color: colors.white,
    textDecorationLine: 'underline',
  },
  dontHaveAccount: {
    alignSelf: 'center',
    fontFamily: fonts.Regular,
    color: colors.white,
  },
});
