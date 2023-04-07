import {StyleSheet} from 'react-native';
import fonts from '@corporateFoods/utils/fonts';
import {colors} from '@corporateFoods/utils/colors';
import {SCREEN_HEIGHT, vh, vw} from '@corporateFoods/utils/dimensions';

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: vw(26),
    minHeight: SCREEN_HEIGHT - vh(127),
  },
  container: {
    flex: 1,
  },
  safeView: {
    flex: 1,
  },
  personType: {
    width: '40%',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.grayLight1,
  },
  personTypeMainView: {
    marginTop: '10%',
    height: vh(120),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userTypeText: {
    fontFamily: fonts.Regular,
  },
  inputContainerStyle: {
    marginBottom: '10%',
    borderRadius: vw(5),
  },
  selectedType: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },

    elevation: 15,
    shadowRadius: 9.51,
    shadowOpacity: 0.43,
    borderColor: colors.orange,
    backgroundColor: colors.darkWhite,
  },
  employeeId: {
    color: colors.gray,
    marginBottom: vh(10),
    fontFamily: fonts.Regular,
  },
});

export default styles;
