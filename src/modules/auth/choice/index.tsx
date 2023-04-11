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
import CustomButton from '@corporateFoods/components/customButton';
import {signUPFunction} from '../action';
import {useDispatch} from 'react-redux';
import HeaderComponent from '@corporateFoods/components/headerComponent';
import {useNavigation, useRoute} from '@react-navigation/native';

const Choice = () => {
  const [id, setId] = useState('');
  const [userType, setUserType] = useState('');
  const [company, setCompany] = useState({
    text: '',
  });
  const Routes = useRoute();
  const dispatch: any = useDispatch();
  const navigation = useNavigation();
  const empType = userType === string.employee;
  const vendType = userType === string.vendor;
  const {name, email, password}: any = Routes.params;

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
        callback={(value: {text: string}) => {
          setCompany(value);
          Keyboard.dismiss();
        }}
        ListContainerStyle={styles.dropBoxListContainer}
      />
    );
  };

  const setText = useCallback((text: string) => {
    setId(text);
  }, []);

  const employeeIdComponent = () => {
    return (
      <View style={styles.emailInputContainer}>
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
      </View>
    );
  };

  const arrowPress = () => {
    navigation.goBack();
  };

  const screenComponents = () => {
    return (
      <HideKeyboard>
        <View style={[styles.mainView]}>
          <HeaderComponent
            leftImage={image.back}
            leftContainerStyle={styles.headerButtonContainer}
            onLeftButtonPress={arrowPress}
            leftImageContainerStyle={styles.headerLeftImageStyle}
          />
          {personTypeComponents()}
          {empType && employeeIdComponent()}
          {dropBox()}
          <CustomButton
            buttonText={string.submit}
            onPress={() => {
              const params: any = {
                name,
                email,
                password,
                employeeId: id,
                accountType: userType === 'Employee' ? 1 : 2,
                companyName: company?.text,
              };
              if (params.accountType === 2) delete params?.employeeId;
              dispatch(
                signUPFunction(
                  params,
                  (resp: any) => {
                    console.log('resp', resp);
                  },
                  (error: any) => {
                    console.log('error', error);
                  },
                ),
              );
            }}
          />
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
