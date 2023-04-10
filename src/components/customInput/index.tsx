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
import {normalize, vh, vw} from '@corporateFoods/utils/dimensions';

export interface CustomInputPropsType {
  setText: Function;
  focusColor?: string;
  borderWidth?: number;
  paddingHorizontal?: number;
  notFocussedColor?: string;
  onFocus?: Function;
  onBlur?: Function;
  takeIconsInsideBorder?: boolean;
  leftIcon?: ImageProps['source'];
  rightIcon?: ImageProps['source'];
  leftIconConatinerStyle?: ViewStyle;
  rightIconContainerStyle?: ViewStyle;
  leftIconStyle?: ImageProps['style'];
  containerStyle?: ViewProps['style'];
  rightIconStyle?: ImageProps['style'];
  customInputStyle?: ViewProps['style'];
  onKeyPress?: TextInputProps['onKeyPress'];
  autoCorrect?: TextInputProps['spellCheck'];
  value: TextInputProps['value'] | undefined;
  placeholder?: TextInputProps['placeholder'];
  maximumLength?: TextInputProps['maxLength'];
  resizeModeLeftIcon?: ImageProps['resizeMode'];
  keyboardType?: TextInputProps['keyboardType'];
  resizeModeRightIcon?: ImageProps['resizeMode'];
  resizeMethodLeftIcon?: ImageProps['resizeMethod'];
  selectionColor?: TextInputProps['selectionColor'];
  resizeMethodRightIcon?: ImageProps['resizeMethod'];
  onLeftIconPress?: TouchableOpacityProps['onPress'];
  onRightIconPress?: TouchableOpacityProps['onPress'];
  secureTextInput?: TextInputProps['secureTextEntry'];
  selectTextOnFocus?: TextInputProps['selectTextOnFocus'];
  leftIconActiveOpacity?: TouchableOpacityProps['activeOpacity'];
  rightIconActiveOpacity?: TouchableOpacityProps['activeOpacity'];
}

const CustomInput = React.forwardRef(
  (props: CustomInputPropsType, ref: any) => {
    const {
      value,
      setText,
      leftIcon,
      onFocus,
      onBlur,
      rightIcon,
      selectionColor,
      onKeyPress = () => {},
      autoCorrect = false,
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
      selectTextOnFocus,
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

    const onFocusInput = () => {
      setFocusedFunction();
      onFocus && onFocus();
    };

    const onBlurInput = () => {
      setFocusedFunction();
      onBlur && onBlur();
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
          onBlur={onBlurInput}
          onFocus={onFocusInput}
          secureTextEntry={secureTextInput}
          autoCorrect={autoCorrect}
          autoCapitalize="none"
          onChangeText={text => {
            setText(text);
          }}
          selectionColor={selectionColor}
          onKeyPress={e => {
            onKeyPress(e);
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
          selectTextOnFocus={selectTextOnFocus}
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

export default React.memo(CustomInput);

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
