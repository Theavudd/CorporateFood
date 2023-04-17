import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LOGOUT} from '@corporateFoods/utils/actionTypes';
import {useDispatch} from 'react-redux';

export default function Setting() {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Text>Settings</Text>

      <Button
        title="Logout"
        onPress={() => {
          dispatch({
            type: LOGOUT,
          });
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
