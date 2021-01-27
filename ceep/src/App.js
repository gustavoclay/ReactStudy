import React, { Component } from 'react';
import "./assets/App.css";
import './assets/index.css';
import CadastroForm from './components/CadastroForm';
import ListaCategorias from './components/ListaCategorias/ListaCategorias';
import ListaNotas from "./components/ListaNotas";
import Categorias from './models/Categorias';
import Notas from './models/Notas';

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new Notas();
  }

  render() {
    return (
      <section className="conteudo">
        <CadastroForm
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaCategorias
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          />
          <ListaNotas
            notas={this.notas}
            deletarNota={this.notas.apagarNota.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}

export default App;
