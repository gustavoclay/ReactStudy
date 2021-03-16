import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Button from "./components/Button";


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.button}>
          <Button label='AC'></Button>
          <Button label='/'></Button>
          <Button label='7'></Button>
          <Button label='8'></Button>
          <Button label='9'></Button>
          <Button label='*'></Button>
          <Button label='4'></Button>
          <Button label='5'></Button>
          <Button label='6'></Button>
          <Button label='-'></Button>
          <Button label='1'></Button>
          <Button label='2'></Button>
          <Button label='3'></Button>
          <Button label='+'></Button>
          <Button label='0'></Button>
          <Button label='.'></Button>
          <Button label='='></Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default App;
