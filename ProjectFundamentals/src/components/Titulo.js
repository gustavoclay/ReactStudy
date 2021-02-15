import React from 'react';
import { Text } from 'react-native';
import Estilo from './Estilo';

export default ({ principal, secundario }) => (
  <>
    <Text style={Estilo.txtG}>{principal}</Text>
    <Text>{secundario}</Text>
  </>
)
