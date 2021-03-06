import React, { Component } from "react";
import "./style.css";

class CardNota extends Component {
  deletarNota() {
    const indice = this.props.indice;
    this.props.deletarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <i onClick={this.deletarNota.bind(this)} className="material-icons">
            delete
          </i>
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
