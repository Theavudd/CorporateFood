import {colors} from '@corporateFoods/utils/colors';
import {vh, vw} from '@corporateFoods/utils/dimensions';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: vw(20),
  },
  inputStyle: {
    borderRadius: vw(5),
  },
  inputContainerStyle: {
    height: vh(30),
    width: vh(30),
    // borderRadius: vw(5),
  },
});

export default styles;
