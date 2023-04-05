import React from 'react';
import image from '../../utils/image';
import fonts from '../../utils/fonts';
import {colors} from '../../utils/colors';
import ScreenNames from '../../router/screenNames';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/customButton';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {vh, vw} from '../../utils/dimensions';
import string from '../../utils/string';
export default function WelcomeScreen() {
  const navigation = useNavigation<any>();

  const loginButtons = () => {
    return (
      <View style={styles.loginBtn}>
        <CustomButton
          onPress={() => {}}
          buttonText={string.google}
          leftImage={image.google}
          extraLeftImageContainerStyle={{height: '40%'}}
          containerStyle={styles.gBtn}
          textStyle={styles.gTxt}
        />
        <CustomButton
          onPress={() => {
            navigation.replace(ScreenNames.LOGIN, {showBackButton: false});
          }}
          buttonText={string.loginWithEmail}
          extraLeftImageContainerStyle={{height: '40%'}}
          containerStyle={styles.lBtn}
          textStyle={styles.lTxt}
        />
        <Text style={styles.dontHaveAccount}>
          {string.dontHaveAccount}
          <Text
            style={styles.signUp}
            onPress={() => {
              navigation.replace(ScreenNames.SIGNUP, {showBackButton: false});
            }}>
            {string.signUp}
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
      <SafeAreaView style={styles.safeView}>
        <View style={styles.headView}>
          <Text style={styles.welcome}>{string.welcomeTo}</Text>
          <Text style={styles.corporate}>{string.corporatefood}</Text>
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
  safeView: {flex: 1, marginTop: vh(40)},
  headView: {
    alignSelf: 'center',
    marginTop: vh(80),
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
  gBtn: {
    backgroundColor: colors.white,
    marginHorizontal: vw(25),
  },
  gTxt: {color: colors.blackDark, fontFamily: fonts.SemiBold},
  socialSignInText: {
    marginHorizontal: '6%',
    fontSize: vw(10),
    color: colors.gray,
  },
  lBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.21)',
    borderWidth: 1,
    borderColor: colors.white,
    marginVertical: vh(23),
    marginHorizontal: vw(25),
  },
  lTxt: {color: colors.white, fontFamily: fonts.Regular},
  loginBtn: {
    position: 'absolute',
    bottom: vh(60),
    flex: 0.3,
    width: '100%',
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
