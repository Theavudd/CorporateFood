import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import styles from './styles';
import CustomInput from '../customInput';
import {colors} from '@corporateFoods/utils/colors';

interface Props {
  onCompleteFill?: Function;
  containerStyle?: ViewStyle;
}

export default function OtpComponent(props: Props) {
  const {onCompleteFill = () => {}, containerStyle} = props;

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  const input1ref: RefObject<TextInput> = useRef(null);
  const input2ref: RefObject<TextInput> = useRef(null);
  const input3ref: RefObject<TextInput> = useRef(null);
  const input4ref: RefObject<TextInput> = useRef(null);

  const completeOtp: any = useRef([]);

  useEffect(() => {
    input1ref.current?.focus();
  }, []);

  const changeInput1 = useCallback((text: string) => {
    setInput1(text);
    if (text.length === 1) {
      input2ref.current?.focus();
    }
    completeOtp.current[0] = text;
  }, []);
  const changeInput2 = useCallback((text: string) => {
    setInput2(text);

    if (text.length === 1) {
      input3ref.current?.focus();
    }
    completeOtp.current[1] = text;
  }, []);

  const changeInput3 = useCallback((text: string) => {
    setInput3(text);
    if (text.length === 1) {
      input4ref.current?.focus();
    }
    completeOtp.current[2] = text;
  }, []);

  const changeInput4 = useCallback((text: string) => {
    setInput4(text);
    completeOtp.current[3] = text;
    if (text.length === 1) {
      input4ref.current?.blur();
    }
    const currentOtpString = completeOtp.current.toString().replaceAll(',', '');
    if (currentOtpString.length === 4) {
      onCompleteFill(currentOtpString);
    }
  }, []);

  const getFocusToLast = (state: string, reference: any, key: string) => {
    if (state.length === 0 && key === 'Backspace') reference.current.focus();
  };

  return (
    <View style={[styles.mainView, containerStyle]}>
      <CustomInput
        value={input1}
        ref={input1ref}
        maximumLength={1}
        setText={changeInput1}
        selectTextOnFocus={true}
        focusColor={colors.orange}
        keyboardType={'number-pad'}
        selectionColor={colors.orange}
        customInputStyle={styles.inputStyle}
        notFocussedColor={colors.grayLight1}
        containerStyle={styles.inputContainerStyle}
      />

      <CustomInput
        value={input2}
        ref={input2ref}
        maximumLength={1}
        setText={changeInput2}
        selectTextOnFocus={true}
        focusColor={colors.orange}
        keyboardType={'number-pad'}
        selectionColor={colors.orange}
        customInputStyle={styles.inputStyle}
        notFocussedColor={colors.grayLight1}
        containerStyle={styles.inputContainerStyle}
        onKeyPress={e => {
          getFocusToLast(input2, input1ref, e.nativeEvent.key);
        }}
      />
      <CustomInput
        value={input3}
        ref={input3ref}
        maximumLength={1}
        setText={changeInput3}
        selectTextOnFocus={true}
        focusColor={colors.orange}
        keyboardType={'number-pad'}
        selectionColor={colors.orange}
        customInputStyle={styles.inputStyle}
        notFocussedColor={colors.grayLight1}
        containerStyle={styles.inputContainerStyle}
        onKeyPress={e => {
          getFocusToLast(input3, input2ref, e.nativeEvent.key);
        }}
      />
      <CustomInput
        value={input4}
        ref={input4ref}
        maximumLength={1}
        setText={changeInput4}
        selectTextOnFocus={true}
        focusColor={colors.orange}
        keyboardType={'number-pad'}
        selectionColor={colors.orange}
        customInputStyle={styles.inputStyle}
        notFocussedColor={colors.grayLight1}
        containerStyle={styles.inputContainerStyle}
        onKeyPress={e => {
          getFocusToLast(input4, input3ref, e.nativeEvent.key);
        }}
      />
    </View>
  );
}
