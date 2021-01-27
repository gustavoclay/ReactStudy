import React, { Component } from "react";
import "./style.css";

export class ListaCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] };
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
    console.log(categorias);
  }

  _handleEventoInput(evento) {
    if (evento.key === "Enter") {
      const categoria = evento.target.value;
      this.props.adicionarCategoria(categoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          className="lista-categorias_input"
          type="text"
          placeholder="Adicionar categoria..."
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaCategorias;
