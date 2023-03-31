import React from 'react';
import {colors} from '../../utils/colors';
import Lottie from 'lottie-react-native';
import ScreenNames from '../../router/screenNames';
import {useNavigation} from '@react-navigation/native';
import {StatusBar, StyleSheet, View} from 'react-native';

const LottieJSON = '../../assets/images/splash.json';

export default function SplashScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.mainView}>
      <StatusBar hidden />
      <Lottie
        loop={false}
        autoPlay
        speed={0.8}
        renderMode={'AUTOMATIC'}
        resizeMode={'contain'}
        onAnimationFinish={() => {
          navigation.navigate(ScreenNames.WELCOME);
        }}
        source={require(LottieJSON)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.orange,
    justifyContent: 'center',
  },
});
