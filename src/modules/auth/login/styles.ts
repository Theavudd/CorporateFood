import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
import {vw, vh, SCREEN_HEIGHT} from '../../../utils/dimensions';
import fonts from '../../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputName: {
    color: colors.textGray,
    fontSize: vw(16),
    marginBottom: vh(12),
  },
  mainView: {
    paddingHorizontal: vw(26),
    justifyContent: 'space-between',
    minHeight: SCREEN_HEIGHT - vh(127),
  },
  safeView: {
    flex: 1,
  },
  eyeContainer: {
    width: vw(20),
    height: vh(20),
  },
  eyeImage: {
    width: '100%',
    height: '100%',
  },
  inputContainerStyle: {
    height: vh(50),
    borderRadius: vw(10),
  },
  forgotPassword: {
    alignSelf: 'center',
    color: colors.orange,
  },
  login: {
    fontSize: vw(36),
    color: colors.blackDark,
    fontFamily: fonts.SemiBold,
  },
  signUp: {
    fontSize: vw(14),
    color: colors.orange,
  },
  dontHaveAccount: {
    alignSelf: 'center',
    color: colors.blackDark,
    fontFamily: fonts.Regular,
  },
  buttonContainerStyle: {
    marginHorizontal: vw(20),
  },
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
  buttonText: {
    fontFamily: fonts.SemiBold,
  },
  headerButtonContainer: {
    height: vh(38),
    marginHorizontal: 0,
    borderRadius: vw(10),
    backgroundColor: 'white',
  },
  headerLeftImageStyle: {height: '40%'},
});
