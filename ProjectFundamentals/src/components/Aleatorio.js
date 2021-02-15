import React from 'react';
import { Text } from 'react-native';

export default ({ min, max }) => {
  const num = getRandomNumber(min, max);
  return <Text>Numero Aleatório: {num}</Text>
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

