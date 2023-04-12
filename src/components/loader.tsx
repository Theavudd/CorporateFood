import React from 'react';
import Lottie from 'lottie-react-native';
import {View, StyleSheet} from 'react-native';
import {colors} from '@corporateFoods/utils/colors';

const LottieJSON = '../assets/images/loader.json';

export default function Loader() {
  return (
    <View style={styles.container}>
      <Lottie
        loop={true}
        autoPlay
        speed={0.8}
        renderMode={'AUTOMATIC'}
        resizeMode={'contain'}
        source={require(LottieJSON)}
        style={styles.logoStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  logoStyle: {
    height: 200,
    width: 200,
    marginBottom: 100,
    // opacity: 0.95,
  },
});
