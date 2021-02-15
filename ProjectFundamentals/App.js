import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Titulo from "./src/components/Titulo";


export default () => (
  <SafeAreaView style={style.App}>
    <Titulo principal="Formulário" secundario="Cadastro de pessoas" />
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
