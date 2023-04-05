import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/colors';
import fonts from '../../../utils/fonts';

const styles = StyleSheet.create({
  mainView: {
    paddingVertical: vh(20),
    paddingHorizontal: vw(26),
    justifyContent: 'space-between',
    minHeight: SCREEN_HEIGHT - vh(127),
  },
  safeView: {
    flex: 1,
  },
  headerLeftContainer: {
    height: vh(38),
    marginHorizontal: 0,
    borderRadius: vw(10),
    backgroundColor: 'white',
  },
  signUp: {
    fontSize: vw(36),
    color: colors.blackDark,
    fontFamily: fonts.SemiBold,
  },
  inputName: {
    color: colors.textGray,
    fontSize: vw(16),
    marginBottom: vh(12),
  },
  inputContainerStyle: {
    height: vh(50),
    borderRadius: vw(10),
  },
  eyeContainer: {
    width: vw(20),
    height: vh(20),
  },
  eyeImage: {
    width: '100%',
    height: '100%',
  },
  buttonContainerStyle: {
    marginHorizontal: vw(20),
  },
  buttonText: {
    fontFamily: fonts.SemiBold,
  },
  alreadyHaveAccount: {
    alignSelf: 'center',
    color: colors.blackDark,
    fontFamily: fonts.Regular,
  },
  googleButtonContainerStyle: {
    marginHorizontal: vw(20),
    backgroundColor: colors.white,
  },
  googleSignInText: {color: colors.blackDark, fontFamily: fonts.Regular},
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
  logIn: {
    fontSize: vw(14),
    color: colors.orange,
  },
  headerButtonContainer: {
    height: vh(38),
    marginHorizontal: 0,
    borderRadius: vw(10),
    backgroundColor: 'white',
  },
  headerLeftImageStyle: {height: '55%'},
});
export default styles;
