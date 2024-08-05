import React, { Component } from "react";
import  TabelaHead   from "./components/tabelaHead";
import  TabelaFoot  from "./components/tabelaFoot";
import  TabelaBody from "./components/tabelaBody";

class App extends Component{

state ={
  livros: [
  {

    id: "12312-123123-412312",
    titulo: "CSS Grid Layout",
    autor: "Mauricio Samy Silva"
    
  },
  {

    id: "129483-934-393930",
    titulo: "Node Essencial",
    autor: "Ricardo R. Lecheta"
  },
  {
  id: "94839-82349-3738",
  titulo: "Aprendendo Material Design",
  autor: "Kile Mew"
  }    
  
]
};
render() {
    return (
<table className="tabela">
<TabelaHead/>
<TabelaBody livros={ this.state.livros }/>
<TabelaFoot/>
</table>
   
  );
}
}

export default App;
