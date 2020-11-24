import React, { Component } from "react";
import "./style.css";

export class ListaCategorias extends Component {
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
          {this.props.categorias.map((categoria, index) => {
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
