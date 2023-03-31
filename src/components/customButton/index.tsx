import {
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ImageProps,
  ImageStyle,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AsyncImage from '../asyncImage';
import Images from '../../utils/image';

interface Props {
  buttonText?: string;
  leftImage?: ImageProps['source'];
  rightImage?: ImageProps['source'];
  onPress: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  extraLeftImageStyle?: ImageStyle;
  extraRightImageStyle?: ImageStyle;
  extraLeftImageContainerStyle?: ViewStyle;
  extraRightImageContainerStyle?: ViewStyle;
}

export default function CustomButton({
  buttonText,
  leftImage,
  rightImage,
  onPress,
  containerStyle,
  textStyle,
  extraLeftImageStyle,
  extraRightImageStyle,
  extraLeftImageContainerStyle,
  extraRightImageContainerStyle,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      {leftImage && (
        <AsyncImage
          localImage={Images.password}
          resizeMode={'contain'}
          extra={extraLeftImageStyle}
          extraContainerStyle={extraLeftImageContainerStyle}
        />
      )}
      {buttonText && <Text style={[styles.text, textStyle]}>{buttonText}</Text>}
      {rightImage && (
        <AsyncImage
          localImage={Images.password}
          resizeMode={'contain'}
          extraImageStyle={extraRightImageStyle}
          extraContainerStyle={extraRightImageContainerStyle}
        />
      )}
    </TouchableOpacity>
  );
}
