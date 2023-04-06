import React from 'react';
import {colors} from '../../utils/colors';
import Lottie from 'lottie-react-native';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ReducersModal} from '@corporateFoods/utils/modal';

import {SET_LOADING} from '@corporateFoods/utils/actionTypes';

const LottieJSON = '../../assets/images/splash.json';

export default function SplashScreen() {
  const {token} = useSelector((state: ReducersModal) => state.AuthReducer);
  const dispatch = useDispatch();

  return (
    <View style={styles.mainView}>
      <Lottie
        loop={false}
        autoPlay
        speed={0.8}
        renderMode={'AUTOMATIC'}
        resizeMode={'contain'}
        source={require(LottieJSON)}
        onAnimationFinish={() => {
          dispatch({
            type: SET_LOADING,
            payload: {isLoading: false},
          });
        }}
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
