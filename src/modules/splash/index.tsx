import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {vh, vw} from '../../utils/dimensions';
import Lottie from 'lottie-react-native';
import fonts from '../../utils/fonts';
import image from '../../utils/image';

export default function SplashScreen() {
  return (
    <View style={styles.mainView}>
      {/* <Animated.View
        style={{
          transform: [
            {
              scale: animate,
            },
          ],

        }}>
        <Image source={image.splash} style={styles.floating} />
       
      </Animated.View> */}

      <Lottie
        loop={false}
        autoPlay
        speed={0.8}
        renderMode={'AUTOMATIC'}
        resizeMode={'contain'}
        onAnimationFinish={() => {
          console.log('finished');
        }}
        source={require('../../assets/images/splash.json')}
      />
      {/* <Text style={styles.heading}>{'Corporate Food'}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // floating: {
  //   height: vh(200),
  //   width: vw(200),
  //   alignSelf: 'center',
  //   resizeMode: 'contain',
  //   borderRadius: vh(400),
  //   backgroundColor: 'white',
  // },
  mainView: {
    flex: 1,
    backgroundColor: colors.orange,
    justifyContent: 'center',
  },
  heading: {
    fontSize: vw(24),
    fontFamily: fonts.SemiBold,
    textAlign: 'center',
    paddingHorizontal: vw(10),
    paddingVertical: vh(10),
    color: colors.white,
  },
});
