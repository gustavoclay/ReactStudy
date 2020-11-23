import React, { Component } from 'react';
import "./assets/App.css";
import './assets/index.css';
import CadastroForm from './components/CadastroForm';
import ListaNotas from "./components/ListaNotas";

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <CadastroForm criarNota={this.criarNota.bind(this)} />
        <ListaNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
