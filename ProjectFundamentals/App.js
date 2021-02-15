import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Botao from './src/components/Botao';


export default () => (
  <SafeAreaView style={style.App}>
    <Botao />
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
