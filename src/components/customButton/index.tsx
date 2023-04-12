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
import {colors} from '@corporateFoods/utils/colors';

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
  disabled?: boolean;
}

function CustomButton({
  buttonText,
  leftImage,
  rightImage,
  onPress,
  containerStyle,
  textStyle,
  extraLeftImageStyle,
  extraRightImageStyle,
  disabled = false,
  extraLeftImageContainerStyle,
  extraRightImageContainerStyle,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        containerStyle,
        disabled && {backgroundColor: colors.grayLight},
      ]}>
      {leftImage && (
        <AsyncImage
          localImage={leftImage}
          resizeMode={'contain'}
          extra={extraLeftImageStyle}
          extraContainerStyle={extraLeftImageContainerStyle}
        />
      )}
      {buttonText && <Text style={[styles.text, textStyle]}>{buttonText}</Text>}
      {rightImage && (
        <AsyncImage
          localImage={rightImage}
          resizeMode={'contain'}
          extraImageStyle={extraRightImageStyle}
          extraContainerStyle={extraRightImageContainerStyle}
        />
      )}
    </TouchableOpacity>
  );
}

export default React.memo(CustomButton);
