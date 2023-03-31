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
} from 'react-native';
import {normalize, vh, vw} from '../../utils/dimensions';

export interface CustomInputPropsType {
  setText: Function;
  focusColor?: string;
  borderWidth?: number;
  notFocussedColor?: string;
  takeIconsInsideBorder?: boolean;
  leftIcon?: ImageProps['source'];
  rightIcon?: ImageProps['source'];
  leftIconStyle?: ImageProps['style'];
  containerStyle?: ViewProps['style'];
  rightIconStyle?: ImageProps['style'];
  editable?: TextInputProps['editable'];
  customInputStyle?: ViewProps['style'];
  multiline?: TextInputProps['multiline'];
  value: TextInputProps['value'] | undefined;
  HideCarret?: TextInputProps['caretHidden'];
  placeholder?: TextInputProps['placeholder'];
  autoCorrect?: TextInputProps['autoCorrect'];
  maximumLength?: TextInputProps['maxLength'];
  resizeModeLeftIcon?: ImageProps['resizeMode'];
  keyboardType?: TextInputProps['keyboardType'];
  resizeModeRightIcon?: ImageProps['resizeMode'];
  resizeMethodLeftIcon?: ImageProps['resizeMethod'];
  resizeMethodRightIcon?: ImageProps['resizeMethod'];
  onLeftIconPress?: TouchableOpacityProps['onPress'];
  onRightIconPress?: TouchableOpacityProps['onPress'];
  secureTextInput?: TextInputProps['secureTextEntry'];
  leftIconConatinerStyle?: TouchableOpacityProps['style'];
  rightIconContainerStyle?: TouchableOpacityProps['style'];
  leftIconActiveOpacity?: TouchableOpacityProps['activeOpacity'];
  rightIconActiveOpacity?: TouchableOpacityProps['activeOpacity'];
  [key: string]: any;
}

const CustomInput = React.forwardRef(
  (props: CustomInputPropsType, ref: any) => {
    const {
      value,
      setText,
      leftIcon,
      rightIcon,
      HideCarret,
      placeholder,
      keyboardType,
      leftIconStyle,
      maximumLength,
      rightIconStyle,
      containerStyle,
      borderWidth = 1,
      editable = true,
      onLeftIconPress,
      customInputStyle,
      onRightIconPress,
      multiline = false,
      autoCorrect = false,
      focusColor = '#000000',
      leftIconConatinerStyle,
      secureTextInput = false,
      rightIconContainerStyle,
      leftIconActiveOpacity = 1,
      rightIconActiveOpacity = 1,
      notFocussedColor = '#000000',
      resizeMethodLeftIcon = 'auto',
      takeIconsInsideBorder = false,
      resizeModeLeftIcon = 'contain',
      resizeMethodRightIcon = 'auto',
      resizeModeRightIcon = 'contain',
      ...rest
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
                borderWidth: borderWidth,
                borderColor: focused ? focusColor : notFocussedColor,
              }
            : {},
        ]}
        {...rest}>
        {leftIcon && (
          <TouchableOpacity
            onPress={onLeftIconPress}
            style={[leftIconConatinerStyle]}
            activeOpacity={1}
            {...rest}>
            <Image
              source={leftIcon}
              resizeMode={resizeModeLeftIcon}
              resizeMethod={resizeMethodLeftIcon}
              style={[styles.leftIcon, leftIconStyle]}
              {...rest}
            />
          </TouchableOpacity>
        )}
        <TextInput
          ref={ref}
          value={value}
          editable={editable}
          multiline={multiline}
          caretHidden={HideCarret}
          autoCorrect={autoCorrect}
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
                  borderWidth: borderWidth,
                  borderColor: focused ? focusColor : notFocussedColor,
                }
              : {},
          ]}
          {...rest}
        />
        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={[rightIconContainerStyle]}
            activeOpacity={rightIconActiveOpacity}
            {...rest}>
            (
            <Image
              source={rightIcon}
              resizeMode={resizeModeRightIcon}
              resizeMethod={resizeMethodRightIcon}
              style={[styles.rightIcon, rightIconStyle]}
              {...rest}
            />
            )
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
  },
  textInput: {
    flex: 1,
    color: 'black',
    height: vh(40),
    fontSize: normalize(16),
    paddingHorizontal: vw(10),
  },
  leftIcon: {},
  rightIcon: {},
});
