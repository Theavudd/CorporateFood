import {ImageBackground, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import image from '@corporateFoods/utils/image';
import {SafeAreaView} from 'react-native-safe-area-context';
import HideKeyboard from '@corporateFoods/components/hideKeyboard';
import HeaderComponent from '@corporateFoods/components/headerComponent';
import {useNavigation} from '@react-navigation/native';
import {vh, vw} from '@corporateFoods/utils/dimensions';
import {colors} from '@corporateFoods/utils/colors';

export default function ProfileScreen() {
  const screenComponents = () => {
    const navigation = useNavigation<any>();
    const arrowPress = React.useCallback(() => {
      navigation.goBack();
    }, []);
    return (
      <View>
        <HeaderComponent
          leftImage={image.back}
          leftContainerStyle={styles.headerButtonContainer}
          onLeftButtonPress={arrowPress}
          leftImageContainerStyle={styles.headerLeftImageStyle}
        />
        <View style={styles.profileContainer}></View>
      </View>
    );
  };

  return (
    <ImageBackground
      style={styles.mainView}
      resizeMode="stretch"
      source={image.profile}>
      <SafeAreaView style={styles.safeView}>
        <HideKeyboard>{screenComponents()}</HideKeyboard>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  headerButtonContainer: {
    backgroundColor: 'white',
    height: vh(38),
    borderRadius: vw(10),
    marginHorizontal: vw(26),
  },
  headerLeftImageStyle: {height: '40%'},
  safeView: {
    flex: 1,
  },
  profileContainer: {
    height: vw(120),
    width: vw(120),
    backgroundColor: colors.yellowLight1,
    borderRadius: vw(100),
    borderWidth: vw(8),
    borderColor: colors.white,
    alignSelf: 'center',
    marginTop: Platform.OS == 'ios' ? vh(35) : vh(60),
  },
});
