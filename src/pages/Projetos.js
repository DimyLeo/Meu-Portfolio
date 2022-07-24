import React from "react";
import Projeto from "../img/projeto-vazio.png";
import ProjetoTrybewarts from "../img/Trybewarts - Responsivo.gif";

class Projetos extends React.Component {
  render(){
    return(
      <div className="div-projetos">
        <div className="div-text-projetos">
          <h1>Alguns Projetos de Exemplo:</h1>
          <p>Esses são alguns Projetos que fiz/a fazer durante o curso da Trybe, sendo um deles esse próprio Site Pessoal.</p>
        </div>
        <div className="div-img-projetos">
          <label htmlFor="trybewarts">
            <img className="projetos" src={ProjetoTrybewarts} alt="Projeto Trybewarts Responsivo"/>
          </label>
          <label>
            <img className="projetos" src={Projeto} alt="Projeto"/>
          </label>
          <label>
            <img className="projetos" src={Projeto} alt="Projeto"/>
          </label>
        </div>
      </div>
    )
  }
}

export default Projetos;