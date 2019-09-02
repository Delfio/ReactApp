import React, { Component } from "react";

import TechItem from "./TechItem";

class TechList extends Component {
  //Atribuindo um valor default para a propriedade tech, forma mais facil
  //static defaultProps = {
  //tech: "Oculto!"
  //};
  state = {
    newTech: "",
    techs: []
  }; // Estado do componente - obrigatóriamente ter esse name

  handleInputChange = e => {
    this.props.tech;
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault(); // Impedido que o botão atualize a página
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    }); //Criando um novo arrai, 'imutabilidade'
  };

  handleDelete = tech => {
    //Filtrar o arrai e remover
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
    //Função de deletar item
  };

  //####################################################################
  /**
   * Ciclo de vida de um coponente
   * 3 funções principais DidMount, DidUpdate e WillUnmont
   * basicamente - busca, update e delete
   */

  //Executado assim que o componente aparece em tela!
  componentDidMount() {
    const techs = localStorage.getItem("techs");
    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  //Executado sempre que houver alteração nas props ou estado
  //A função recebe esses dois parametros! prevProps prevState
  componentDidUpdate(_, prevState) {
    //Comparar as prev com as this
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  //Executado quando o componente deixa de existir!
  componentWillUnmount() {}
  //####################################################################

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            ></TechItem>
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
export default TechList;
