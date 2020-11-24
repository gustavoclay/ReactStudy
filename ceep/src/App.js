import React, { Component } from 'react';
import "./assets/App.css";
import './assets/index.css';
import CadastroForm from './components/CadastroForm';
import ListaCategorias from './components/ListaCategorias/ListaCategorias';
import ListaNotas from "./components/ListaNotas";

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: []
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

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  adicionarCategoria(categoria) {
    const novoArrayCategorias = [...this.state.categorias, categoria];
    const novoEstado = {
      ...this.state,
      categorias: novoArrayCategorias
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <CadastroForm
          criarNota={this.criarNota.bind(this)}
        />
        <main className="conteudo-principal">
          <ListaCategorias
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaNotas
            notas={this.state.notas}
            deletarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
