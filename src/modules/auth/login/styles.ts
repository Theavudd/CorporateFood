import {StyleSheet} from 'react-native/types';
import {colors} from '../../../utils/colors';
import {vw, vh} from '../../../utils/dimensions';
import fonts from '../../../utils/fonts';

export const styles = StyleSheet.create({
  inputName: {
    color: colors.textGray,
    fontSize: vw(16),
    marginBottom: vh(12),
  },
  mainView: {
    flex: 1,
    paddingHorizontal: vw(26),
    justifyContent: 'space-between',
  },
  safeView: {
    flex: 1,
  },
  eyeContainer: {
    height: vh(20),
    width: vw(20),
  },
  eyeImage: {
    height: '100%',
    width: '100%',
  },
  inputContainerStyle: {
    borderRadius: vw(10),
    height: vh(50),
  },
  forgotPassword: {
    alignSelf: 'center',
    color: colors.orange,
  },
  login: {
    fontSize: vw(36),
    fontFamily: fonts.SemiBold,
  },
  signUp: {
    fontSize: vw(14),
    color: colors.orange,
  },
  dontHaveAccount: {
    alignSelf: 'center',
    fontFamily: fonts.Regular,
  },
  buttonContainerStyle: {
    marginHorizontal: vw(20),
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
});
