import React, { Component } from 'react';
import CadastroForm from './components/CadastroForm';
import ListaNotas from "./components/ListaNotas";

class App extends Component {
  render() {
    return (
      <section>
        <CadastroForm />
        <ListaNotas />
      </section>
    );
  }
}

export default App;
