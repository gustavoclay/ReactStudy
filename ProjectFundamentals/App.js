import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Pai from './src/components/indireta/Pai';

export default () => (
  <SafeAreaView style={style.App}>
    <Pai></Pai>
  </SafeAreaView>
)

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})
