import {StyleSheet} from 'react-native';
import fonts from '@corporateFoods/utils/fonts';
import {colors} from '@corporateFoods/utils/colors';
import {vh, vw} from '@corporateFoods/utils/dimensions';

const styles = StyleSheet.create({
  dropHead: {
    borderWidth: 1,
    height: vh(40),
    borderRadius: vw(5),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: vw(20),
    borderColor: colors.grayLight1,
    justifyContent: 'space-between',
  },
  headText: {
    color: colors.blackDark,
    fontFamily: fonts.SemiBold,
  },
  renderView: {
    height: vh(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color: colors.blackLight,
    fontFamily: fonts.Regular,
  },
  dropImageContainer: {height: vh(15), width: vh(15)},
  listContainer: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: colors.grayLight1,
  },
  selectCompanyContainer: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: colors.orange,
  },
  countrySelectorEmptyView: {width: 30},
  containerStyle: {marginVertical: 20},
});
export default styles;
