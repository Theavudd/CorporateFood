import {
  ImageBackground,
  Keyboard,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import image from '@corporateFoods/utils/image';
import string from '@corporateFoods/utils/string';
import {colors} from '@corporateFoods/utils/colors';
import DropBox from '@corporateFoods/components/dropbox';
import React, {useCallback, useState} from 'react';
import AsyncImage from '@corporateFoods/components/asyncImage';
import CustomInput from '@corporateFoods/components/customInput';
import HideKeyboard from '@corporateFoods/components/hideKeyboard';

const Choice = () => {
  const [id, setId] = useState('');
  const [userType, setUserType] = useState('');

  const empType = userType === string.employee;
  const vendType = userType === string.vendor;

  const personTypeComponents = () => {
    return (
      <View style={styles.personTypeMainView}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.personType, empType ? styles.selectedType : {}]}
          onPress={() => {
            setUserType(string.employee);
            Keyboard.dismiss();
          }}>
          <AsyncImage
            localImage={
              empType || userType === ''
                ? image.employeeEnable
                : image.employeeDisable
            }
          />
          <Text
            style={[
              styles.userTypeText,
              empType || userType === ''
                ? {color: colors.blackDark}
                : {color: colors.textGray},
            ]}>
            {string.employee}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.personType, vendType ? styles.selectedType : {}]}
          onPress={() => {
            setUserType(string.vendor);
            Keyboard.dismiss();
          }}>
          <AsyncImage
            localImage={
              vendType || userType === ''
                ? image.vendorEnable
                : image.vendorDisable
            }
          />
          <Text
            style={[
              styles.userTypeText,
              vendType || userType === ''
                ? {color: colors.blackDark}
                : {color: colors.textGray},
            ]}>
            {string.vendor}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const dropBox = () => {
    return (
      <DropBox
        dropText={string.selectCompany}
        data={[
          {text: 'Appinventiv'},
          {text: 'TCS'},
          {text: 'Wipro'},
          {text: 'Appinventiv'},
          {text: 'TCS'},
          {text: 'Wipro'},
          {text: 'Appinventiv'},
          {text: 'TCS'},
          {text: 'Wipro'},
          {text: 'Appinventiv'},
          {text: 'TCS'},
          {text: 'Wipro'},
          {text: 'TCS'},
          {text: 'Wipro'},
          {text: 'Appinventiv'},
          {text: 'TCS'},
          {text: 'Wipro'},
        ]}
        callback={(value: Object) => {
          Keyboard.dismiss();
        }}
      />
    );
  };

  const setText = useCallback((text: string) => {
    setId(text);
  }, []);

  const employeeIdComponent = () => {
    return (
      <>
        <Text style={styles.employeeId}>{string.employeeId}</Text>
        <CustomInput
          value={id}
          setText={setText}
          focusColor={colors.orange}
          selectionColor={colors.orange}
          placeholder={string.employeeId}
          notFocussedColor={colors.grayLight1}
          customInputStyle={styles.inputContainerStyle}
        />
      </>
    );
  };

  const screenComponents = () => {
    return (
      <HideKeyboard>
        <View style={[styles.mainView]}>
          {personTypeComponents()}
          {empType && employeeIdComponent()}
          {dropBox()}
        </View>
      </HideKeyboard>
    );
  };

  return (
    <ImageBackground
      style={styles.container}
      source={image.backgroundWrapper}
      resizeMode={'stretch'}>
      <SafeAreaView style={styles.safeView}>{screenComponents()}</SafeAreaView>
    </ImageBackground>
  );
};

export default Choice;
