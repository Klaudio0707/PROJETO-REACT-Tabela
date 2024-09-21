import React, { Component } from "react";
import TabelaHead from "./components/tabelaHead";
import TabelaFoot from "./components/tabelaFoot";
import TabelaBody from "./components/tabelaBody";

class App extends Component {

  state = { //Objeto que armazena dados
    livros: [],
  };
  componentDidMount() { //reqisição imediata 
fetch("./api/livros.json") // metodo url que consulta o endereço do arquivo JSON - promise
.then(response => response.json()) // caso dê certo, recebemos os dados
.then(livros => this.setState({ livros })) // colocamos os dados em nosso objeto no state
.catch(function(error) { 
console.log("Erro na requisição !");
})
.finally(function() {
console.log("Sempre retorna");
})
};
handleRemoverLinha = (id) =>{
const livros = this.state.livros.filter(l => l.id !== id);
this.setState({livros});

}
  render() {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaBody  livros={this.state.livros}
          removerLinha={this.handleRemoverLinha} />
        <TabelaFoot  qdeLivros = { this.state.livros.length }/>
      </table>

    );
  }
}

export default App;
