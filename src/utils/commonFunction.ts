import Snackbar from 'react-native-snackbar';
import {getUniqueId} from 'react-native-device-info';
import {LayoutAnimation, Platform, UIManager} from 'react-native';
import {colors} from './colors';

/**
 * shows snackbar
 * @param title title to show on snackbar
 * @param _
 */
const showSnackbar = (title: string, duration: number = 1000) => {
  if (title !== '' && title !== undefined && title !== null) {
    Snackbar.show({
      text: title,
      duration,
      numberOfLines: 3,
      // textColor: Colors.black,
      backgroundColor: colors.orangeLight,
      // fontFamily: fontFamily.HelveticaBold,
      // action: {
      //   text: 'Close',
      //   // textColor: Colors.white,
      //   onPress: () => {
      //     Snackbar.dismiss();
      //   },
      // },
    });
  }
};

const getDeviceDetail = () => {
  const deviceId = getUniqueId();
  const d = deviceId;
  return d;
};

const linearAnimation = () => {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
};

export default {
  showSnackbar,
  getDeviceDetail,
  linearAnimation,
};
