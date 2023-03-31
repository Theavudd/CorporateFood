import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  ViewProps,
  ImageProps,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {normalize, vh, vw} from '../../utils/dimensions';
import image from '../../utils/image';

export interface CustomInputPropsType {
  setText: Function;
  focusColor?: string;
  borderWidth?: number;
  paddingHorizontal?: number;
  notFocussedColor?: string;
  takeIconsInsideBorder?: boolean;
  leftIcon?: ImageProps['source'];
  rightIcon?: ImageProps['source'];
  leftIconConatinerStyle?: ViewStyle;
  rightIconContainerStyle?: ViewStyle;
  leftIconStyle?: ImageProps['style'];
  containerStyle?: ViewProps['style'];
  rightIconStyle?: ImageProps['style'];
  customInputStyle?: ViewProps['style'];
  value: TextInputProps['value'] | undefined;
  placeholder?: TextInputProps['placeholder'];
  maximumLength?: TextInputProps['maxLength'];
  resizeModeLeftIcon?: ImageProps['resizeMode'];
  keyboardType?: TextInputProps['keyboardType'];
  resizeModeRightIcon?: ImageProps['resizeMode'];
  resizeMethodLeftIcon?: ImageProps['resizeMethod'];
  resizeMethodRightIcon?: ImageProps['resizeMethod'];
  onLeftIconPress?: TouchableOpacityProps['onPress'];
  onRightIconPress?: TouchableOpacityProps['onPress'];
  secureTextInput?: TextInputProps['secureTextEntry'];
  leftIconActiveOpacity?: TouchableOpacityProps['activeOpacity'];
  rightIconActiveOpacity?: TouchableOpacityProps['activeOpacity'];
}

const CustomInput = React.forwardRef(
  (props: CustomInputPropsType, ref: any) => {
    const {
      value,
      setText,
      leftIcon,
      rightIcon,
      placeholder,
      keyboardType,
      leftIconStyle,
      maximumLength,
      rightIconStyle,
      containerStyle,
      borderWidth = 1,
      onLeftIconPress,
      customInputStyle,
      onRightIconPress,
      focusColor = '#000000',
      leftIconConatinerStyle,
      secureTextInput = false,
      rightIconContainerStyle,
      paddingHorizontal = vh(10),
      leftIconActiveOpacity = 1,
      rightIconActiveOpacity = 1,
      notFocussedColor = '#000000',
      resizeMethodLeftIcon = 'auto',
      takeIconsInsideBorder = false,
      resizeModeLeftIcon = 'contain',
      resizeMethodRightIcon = 'auto',
      resizeModeRightIcon = 'contain',
    } = props;

    const [focused, setFocused] = useState(false);

    const setFocusedFunction = () => {
      setFocused(!focused);
    };

    return (
      <View
        style={[
          containerStyle,
          styles.mainView,
          takeIconsInsideBorder
            ? {
                paddingHorizontal: paddingHorizontal,
                borderWidth: borderWidth,
                borderColor: focused ? focusColor : notFocussedColor,
              }
            : {},
        ]}>
        {leftIcon && (
          <TouchableOpacity
            onPress={onLeftIconPress}
            style={[leftIconConatinerStyle]}
            activeOpacity={1}>
            <Image
              source={leftIcon}
              resizeMode={resizeModeLeftIcon}
              resizeMethod={resizeMethodLeftIcon}
              style={[styles.leftIcon, leftIconStyle]}
            />
          </TouchableOpacity>
        )}
        <TextInput
          ref={ref}
          value={value}
          placeholder={placeholder}
          maxLength={maximumLength}
          keyboardType={keyboardType}
          onBlur={setFocusedFunction}
          onFocus={setFocusedFunction}
          secureTextEntry={secureTextInput}
          onChangeText={text => {
            setText(text);
          }}
          style={[
            styles.textInput,
            customInputStyle,
            !takeIconsInsideBorder
              ? {
                  paddingHorizontal: paddingHorizontal,
                  borderWidth: borderWidth,
                  borderColor: focused ? focusColor : notFocussedColor,
                }
              : {},
          ]}
        />
        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={[rightIconContainerStyle]}
            activeOpacity={rightIconActiveOpacity}>
            <Image
              source={rightIcon}
              resizeMode={resizeModeRightIcon}
              resizeMethod={resizeMethodRightIcon}
              style={[styles.rightIcon, rightIconStyle]}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

export default CustomInput;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: 'black',
    height: vh(40),
    fontSize: normalize(16),
  },
  leftIcon: {},
  rightIcon: {},
});
