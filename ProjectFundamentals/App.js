import React from 'react';
import { View } from 'react-native';
import CompPadrao, { Comp2, Comp3 } from './src/components/Multi';
import Primeiro from './src/components/Primeiro';


export default () => (
  <View>
    <CompPadrao />
    <Comp2 />
    <Comp3 />
    <Primeiro />
  </View>
)

