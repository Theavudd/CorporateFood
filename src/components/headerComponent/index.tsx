import React from 'react';
import {
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import Image from '../../utils/image';
import AsyncImage from '../asyncImage';
import CustomButton from '../customButton';

interface Props {
  text?: string;
  extraContainerStyle?: ViewStyle;
  leftImage?: ImageProps['source'];
  rightImage?: ImageProps['source'];
  onLeftButtonPress?: () => void;
  onRightButtonPress?: () => void;
  leftContainerStyle?: ViewStyle;
  rightContainerStyle?: ViewStyle;
  leftImageContainerStyle?: ViewStyle;
  rightImageContainerStyle?: ViewStyle;
}

export default function HeaderComponent(props: Props) {
  const {
    text,
    extraContainerStyle,
    leftImage,
    rightImage,
    onLeftButtonPress = () => {},
    onRightButtonPress = () => {},
    leftContainerStyle,
    leftImageContainerStyle,
    rightImageContainerStyle,
    rightContainerStyle,
  } = props;
  return (
    <View style={[styles.mainView, extraContainerStyle]}>
      {leftImage && (
        <CustomButton
          onPress={onLeftButtonPress}
          leftImage={leftImage}
          containerStyle={leftContainerStyle}
          extraLeftImageContainerStyle={leftImageContainerStyle}
        />
      )}
      {text && <Text>{text}</Text>}
      {rightImage && (
        <CustomButton
          onPress={onRightButtonPress}
          leftImage={rightImage}
          containerStyle={rightContainerStyle}
          extraLeftImageContainerStyle={rightImageContainerStyle}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
  },
});
