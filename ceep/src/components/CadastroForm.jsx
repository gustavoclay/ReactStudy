import React, { Component } from "react";

class CadastroForm extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título"></input>
        <textarea placeholder="Escreva sua nota..."></textarea>
        <button>TESTE</button>
      </form>
    );
  }
}

export default CadastroForm;
