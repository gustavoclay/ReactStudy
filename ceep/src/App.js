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
          categorias={this.categorias.categorias}
          criarNota={this.notas.adicionarNota}
        />
        <main className="conteudo-principal">
          <ListaCategorias
            categorias={this.categorias.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria}
          />
          <ListaNotas
            notas={this.notas.notas}
            deletarNota={this.notas.deletarNota}
          />
        </main>
      </section>
    );
  }
}

export default App;
