import {Keyboard, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const HideKeyboard = ({children}: any) => {
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={styles.mainView}>
      {children}
    </TouchableWithoutFeedback>
  );
};
export default HideKeyboard;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'green',
  },
});
