import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Contador from './src/components/Contador';


export default () => (
  <SafeAreaView style={style.App}>
    <Contador />
    <Contador inicial={0} passo={10} />
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
