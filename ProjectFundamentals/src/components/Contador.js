import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import Estilo from './Estilo';

export default ({ inicial = 0, passo = 1 }) => {

  const [valor, setValor] = useState(inicial)

  function inc() {
    setValor(valor + passo)
  }

  function dec() {
    setValor(valor - passo)
  }


  return (
    <>
      <Text style={Estilo.txtG} >{valor}</Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  )
}
