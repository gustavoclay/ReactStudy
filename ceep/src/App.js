import React, { Component } from 'react';
import "./assets/App.css";
import './assets/index.css';
import CadastroForm from './components/CadastroForm';
import ListaNotas from "./components/ListaNotas";

class App extends Component {

  criarNota(titulo, texto) {
    console.log(`NOTA => Titulo: "${titulo}" - Texto: "${texto}"`);
  }


  render() {
    return (
      <section className="conteudo">
        <CadastroForm criarNota={this.criarNota} />
        <ListaNotas />
      </section>
    );
  }
}

export default App;
