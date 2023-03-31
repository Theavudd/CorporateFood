import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {vh, vw} from '../../utils/dimensions';
import Fonts from '../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: vw(62),
    backgroundColor: colors.orange,
    height: vh(60),
    borderRadius: vw(28.5),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontFamily: Fonts.Regular,
    fontSize: vw(15),
    color: colors.white,
  },
});
