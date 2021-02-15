import React from 'react';
import { Text } from 'react-native';

export default (props) => {
  const num = getRandomNumber(props.min, props.max);
  return <Text>Numero Aleatório: {num}</Text>
}

getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

