import {Button, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {LOGOUT, RESET_STORE} from '@corporateFoods/utils/actionTypes';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Text>Home</Text>

      <Button
        title="Reset"
        onPress={() => {
          dispatch({
            type: LOGOUT,
          });
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
