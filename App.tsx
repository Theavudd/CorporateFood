import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Router from './src/router'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
   <Router/>
   </Provider>
  )
}

const styles = StyleSheet.create({})