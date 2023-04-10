import {StyleSheet} from 'react-native';
import fonts from '@corporateFoods/utils/fonts';
import {colors} from '@corporateFoods/utils/colors';
import {SCREEN_HEIGHT, vh, vw} from '@corporateFoods/utils/dimensions';

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: vw(26),
    flex: 1,
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
    marginBottom: '10%',
  },
  userTypeText: {
    fontFamily: fonts.Regular,
  },
  inputContainerStyle: {
    borderRadius: vw(5),
  },
  selectedType: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    borderColor: colors.orange,
    backgroundColor: colors.darkWhite,
  },
  employeeId: {
    color: colors.gray,
    marginBottom: vh(10),
    fontFamily: fonts.Regular,
  },
  dropBoxListContainer: {},
  emailInputContainer: {marginTop: '7%'},
  headerButtonContainer: {
    height: vh(38),
    marginHorizontal: 0,
    borderRadius: vw(10),
    backgroundColor: 'white',
  },
  headerLeftImageStyle: {height: '55%'},
});

export default styles;
