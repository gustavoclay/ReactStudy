import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Aleatorio from './src/components/Aleatorio';
import MinMax from './src/components/MinMax';
import CompPadrao, { Comp2, Comp3 } from './src/components/Multi';
import Primeiro from './src/components/Primeiro';

export default () => (
  <SafeAreaView style={style.App}>
    {
      <Aleatorio />
      /*
      <MinMax min={3} max={20} />
      <CompPadrao />
      <Comp2 />
      <Comp3 />
      <Primeiro />
      */

    }
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
