import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/colors';
import fonts from '../../../utils/fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingHorizontal: vw(26),
    justifyContent: 'space-between',
    paddingVertical: vh(20),
  },
  safeView: {
    flex: 1,
  },
  headerLeftContainer: {
    backgroundColor: 'white',
    marginHorizontal: 0,
    height: vh(38),
    borderRadius: vw(10),
  },
  signUp: {
    fontSize: vw(36),
    fontFamily: fonts.SemiBold,
    color: colors.blackDark,
  },
  inputName: {
    color: colors.textGray,
    fontSize: vw(16),
    marginBottom: vh(12),
  },
  inputContainerStyle: {
    borderRadius: vw(10),
    height: vh(50),
  },
  eyeContainer: {
    height: vh(20),
    width: vw(20),
  },
  eyeImage: {
    height: '100%',
    width: '100%',
  },
  buttonContainerStyle: {
    marginHorizontal: vw(20),
  },
  buttonText: {
    fontFamily: fonts.SemiBold,
  },
  alreadyHaveAccount: {
    alignSelf: 'center',
    fontFamily: fonts.Regular,
    color: colors.blackDark,
  },
  googleButtonContainerStyle: {
    backgroundColor: colors.white,
    marginHorizontal: vw(20),
  },
  googleSignInText: {color: colors.blackDark, fontFamily: fonts.Regular},
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
  logIn: {
    fontSize: vw(14),
    color: colors.orange,
  },
  headerButtonContainer: {
    backgroundColor: 'white',
    marginHorizontal: 0,
    height: vh(38),
    borderRadius: vw(10),
  },
  headerLeftImageStyle: {height: '55%'},
});
export default styles;
