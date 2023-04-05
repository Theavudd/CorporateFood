import {colors} from '@corporateFoods/utils/colors';
import {vh, vw} from '@corporateFoods/utils/dimensions';
import fonts from '@corporateFoods/utils/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeView: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    paddingHorizontal: vw(20),
  },
  headerButtonContainer: {
    height: vh(38),
    marginHorizontal: 0,
    borderRadius: vw(10),
    backgroundColor: 'white',
  },
  verificationText: {
    fontSize: vw(36),
    marginBottom: vh(12),
    color: colors.blackDark,
    fontFamily: fonts.SemiBold,
  },
  verificationDescription: {
    fontSize: vw(14),
    lineHeight: vh(20),
    marginBottom: vh(31),
    color: colors.textGray,
  },
  headerLeftImageStyle: {height: '40%'},
  dontRecieveCode: {
    alignSelf: 'center',
    color: colors.blackDark,
    fontFamily: fonts.Regular,
  },
  resend: {
    fontSize: vw(14),
    color: colors.orange,
  },
  otpView: {
    marginBottom: vh(32),
  },
});

export default styles;
