// import {Colors} from '@geofirm/themes';
import Snackbar from 'react-native-snackbar';
import fonts from './fonts';
// import {openLimitedPhotoLibraryPicker} from 'react-native-permissions';
import {Alert, Linking, Platform} from 'react-native';
// import I18n from 'i18n-js';
// import permissionComponent from './permission';
// import Geolocation from 'react-native-geolocation-service';
// import Geocoder from 'react-native-geocoder-reborn';
// import {GetOrderModal} from './modals';
import Config from 'react-native-config';
import {useEffect, useState} from 'react';

const nameRegexMin2 = /^[a-zA-Z ]{2,50}$/;
const nameRegex = /^[a-zA-Z ]{3,50}$/;
const schoolName = /^[a-zA-Z!@'`#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]*$/;
const gradRegex = /(19|20)\d{2}/; //1900-2099
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^\d{10}$/;
const last4DigitRegex = /^\d{4}$/;
const passwordRegex =
  /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[\d])(?=.*?[^\sa-zA-Z0-9]).{8,15}$/;
const alphaNumericRegex = /^(?=.*[a-zA-Z])(?=\S+$).{3,40}$/;
const mobileNumberRegex = /^([0-9]{10})$/;

const passwordSpecialRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@%&$!#]).{8,15}$/;

// Geocoder.fallbackToGoogle(YOUR_API_KEY);
// Geocoder.fallbackToGoogle(Config.MAPKEY);
// Geocoder.forceGoogleOnIos(true);

//

/**
 * shows snackbar
 * @param title title to show on snackbar
 */

export const validateName = (name: string) => {
  if (name.length === 0) {
    return {status: false, msg: 'Name required', proceed: false};
  }
  if (name.length > 1 && name.length <= 50) {
    if (nameRegexMin2.test(name)) {
      return {status: true, msg: '', proceed: true};
    } else {
      return {
        status: false,
        msg: 'Alphanumeric characters are not allowed',
        proceed: false,
      };
    }
  } else {
    return {
      status: false,
      msg: 'Name must be atleast 2 characters long',
      proceed: false,
    };
  }
};

// export const validatePostalCode = (postalCode: string) => {
//   if (postalCode.length === 0) {
//     return {status: true, msg: '', proceed: false};
//   }
//   if (postalCode.length >= 3) {
//     return {
//       status: true,
//       msg: '',
//       proceed: true,
//     };
//   } else {
//     return {
//       status: false,
//       msg: 'postal code be atleast 3 digit',
//       proceed: false,
//     };
//   }
// };

// export const validateArea = (name: string) => {
//   if (name.length === 0) {
//     return {status: true, msg: '', proceed: false};
//   }
//   if (name.length > 1) {
//     if (nameRegexMin2.test(name)) {
//       return {status: true, msg: '', proceed: true};
//     } else {
//       return {
//         status: false,
//         msg: 'Alphanumeric characters are not allowed',
//         proceed: false,
//       };
//     }
//   } else {
//     return {
//       status: false,
//       msg: 'Area must be atleast 2 characters long',
//       proceed: false,
//     };
//   }
// };

export const validateEmail = (email: string) => {
  if (email.length === 0) {
    return {status: false, msg: 'Email required', proceed: false};
  }
  if (emailRegex.test(email)) {
    return {status: true, msg: '', proceed: true};
  } else {
    return {status: false, msg: 'Email id is not valid', proceed: false};
  }
};

export const vaildatePassword = (password: string) => {
  if (password.length === 0) {
    return {status: false, msg: 'Password required', proceed: false};
  }
  if (passwordSpecialRegex.test(password)) {
    return {status: true, msg: '', proceed: true};
  } else {
    if (password.length < 8) {
      return {
        status: false,
        msg: 'Password should be atleast 8 charaters',
        proceed: false,
      };
    } else if (password.length > 20) {
      return {
        status: false,
        msg: 'Password should not be more than 20 charaters',
        proceed: false,
      };
    } else {
      return {
        status: false,
        msg: 'Password must contain 1 uppercase,1 lowercase,1 digit and a special character',
        proceed: false,
      };
    }
  }
};
export const vaildatePhoneNumber = (phone: string) => {
  if (phone.length === 0) {
    return {status: true, msg: '', proceed: false};
  }
  if (mobileNumberRegex.test(phone)) {
    return {status: true, msg: '', proceed: true};
  } else {
    return {status: false, msg: 'Minimum 10 numbers required', proceed: false};
  }
};

// export const validateYear = (year: string) => {
//   if (year.length === 0) {
//     return {status: true, msg: '', proceed: false};
//   }
//   if (year.length == 4) {
//     return {status: true, msg: '', proceed: true};
//   } else {
//     return {status: false, msg: 'Year have 4 digit', proceed: false};
//   }
// };

// export const validateCardNumber = (cardNumber: string) => {
//   if (cardNumber.length === 0) {
//     return {status: true, msg: '', proceed: false};
//   }
//   if (cardNumber.length == 16) {
//     return {status: true, msg: '', proceed: true};
//   } else {
//     return {status: false, msg: 'card number have 16 digit', proceed: false};
//   }
// };

// export const validateCVV = (cvv: string) => {
//   if (cvv.length === 0) {
//     return {status: true, msg: '', proceed: false};
//   }
//   if (cvv.length == 3) {
//     return {status: true, msg: '', proceed: true};
//   } else {
//     return {status: false, msg: 'CVV have 3 digit', proceed: false};
//   }
// };

// export const validateSupportMessage = (message: string) => {
//   if (message.length === 0) {
//     return {status: true, msg: '', proceed: false};
//   }
//   if (message.length >= 10 && message.length <= 250) {
//     return {status: true, msg: '', proceed: true};
//   } else {
//     return {
//       status: false,
//       msg: 'Please enter min 10 characters',
//       proceed: false,
//     };
//   }
// };

// export const showSnackbar = (title: string = '') => {
//   Snackbar.show({
//     duration: 2000,
//     numberOfLines: 3,
//     textColor: Colors.white,
//     fontFamily: fonts.REGULAR,
//     backgroundColor: Colors.primaryColor,
//     text: title || 'something went wrong, please try again.',
//     action: {
//       text: 'Close',
//       textColor: Colors.white,
//       onPress: () => {
//         Snackbar.dismiss();
//       },
//     },
//   });
// };
// export const gallaryPermission = () => {
//   openLimitedPhotoLibraryPicker()
//     .then(resposne => {
//       console.log('990490490094', resposne);
//     })
//     .catch(() => {
//       console.warn('Cannot open photo library picker');
//     });
// };

// export const singleButton = (
//   alertMessage: string,
//   okText: any,
//   okFunction: Function,
// ) => {
//   Alert.alert('', alertMessage, [
//     {
//       text: okText,
//       onPress: () => okFunction(),
//     },
//     {
//       style: 'destructive',
//       text: I18n.t('CANCEL'),
//     },
//   ]);
// };
// export const normalizeName = (name: string) =>
//   name.replace(/[^a-zA-Z0-9 ]+/g, '').replace(/^\s+/g, '');
// export const getAddressByLatLong = (
//   latlon: any,
//   successCallback: any,
//   errorCallback: any,
// ) => {
//   Geocoder.geocodePosition(latlon)
//     .then(res => successCallback(res))
//     .catch(err => errorCallback(err));
// };

// export const requestLocationPermission = async (
//   successCallback: any,
//   errorCallback: any,
// ) => {
//   permissionComponent.PermissionLocation(
//     (status: any) => {
//       console.log('mypermison', status);
//       if (status) {
//         console.log('permisson allowed');
//         getLocationUser()
//           .then(res => successCallback(res))
//           .catch(err => errorCallback(err));
//       } else {
//         showAlert();
//         errorCallback();
//       }
//     },
//     () => {},
//   );
// };

// export const showAlert = () => {
//   singleButton(I18n.t('ACCESSDINESLOCATION'), 'Go To Settings', () => {
//     Linking.openSettings()
//       .then(() => {})
//       .catch(() => {});
//   });
// };

// export const showAlertSetting = (statement: any) => {
//   singleButton(statement, 'Go To Settings', () => {
//     Linking.openSettings()
//       .then(() => {})
//       .catch(() => {});
//   });
// };

// const getLocationUser = async () => {
//   return new Promise((res, rej) => {
//     Geolocation.getCurrentPosition(
//       position => {
//         res(position.coords);
//       },
//       error => {
//         // See error code charts below.
//         rej(error);
//       },
//       {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
//     );
//   });
// };
// export const getApikey = () => {
//   const YOUR_API_KEY =
//     Platform.OS === 'android'
//       ? Config.ANDROID_API_MAP_KEY
//       : Config.IOS_API_MAP_KEY;
//   return YOUR_API_KEY;
// };

// export const getOrderDetails = (data: any, userId: string) => {
//   const arr: GetOrderModal[] = [];
//   data.map((element: any) => {
//     if (element.senderId === userId) {
//       //this is for send tab bar, if senderid and app userid is same
//       const obj: GetOrderModal = {
//         // then all data shown in UI is receiver side
//         time: element?.createdAt,
//         address: element.recieverAddress, //receiver address is the address to whom you mail/parcel
//         status: element.status,
//         image: element.recieverAddressImage,
//         name: element?.receiver?.fullName, // show receiver name
//         orderId: element?.orderId,
//         latitude: element?.latitude,
//         longitude: element?.longitude,
//         type: 'Sent',
//       };
//       arr.push(obj);
//     } else {
//       const obj: GetOrderModal = {
//         //this is for received tab bar, if senderid and app userid is not same
//         time: element?.deliveryDate, // then all data shown in UI is sender side
//         address: element.senderAddress, //senderAddress is the address the one who send parcel/mail to you
//         status: element.status === 'DELIVERED' ? 'RECEIVED' : element.status,
//         image: element.recieverAddressImage,
//         name: element?.sender?.fullName, // show sender name
//         orderId: element?.orderId,
//         latitude: element?.latitude,
//         longitude: element?.longitude,
//         type: 'Received',
//       };
//       arr.push(obj);
//     }
//   });
//   return arr;
// };

// export const option1 = {
//   headerShown: true,
//   headerBackVisible: false,
//   headerTitle: '',
// };

// export const getParsedDates = (date: any) => {
//   const currentDate = date.getDate();
//   const currentMonth = date.getMonth();
//   const currentYear = date.getFullYear();
//   const getCurrentFullDate = parseInt(
//     `${currentDate}${currentMonth}${currentYear}`,
//     10,
//   );
//   return getCurrentFullDate;
// };

// export const useDebounce = (value: any, delay: number) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   /**
//    * set new settimeout when value changes and call cleartimeout to clear previous one
//    */
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// };
