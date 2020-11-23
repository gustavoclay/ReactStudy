import React, { Component } from "react";
import "./style.css";

export class ListaCategorias extends Component {
  render() {
    return (
      <section>
        <ul>
          <li>TRABALHO</li>
          <li>ESTUDOS</li>
          <li>CASA</li>
        </ul>
        <input type="text" />
      </section>
    );
  }
}

export default ListaCategorias;
