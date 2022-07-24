import React from "react";
import Projeto from "../img/projeto-vazio.png";
import ProjetoTrybewarts from "../img/Trybewarts - Responsivo.gif";
import ProjetoTryunfo from "../img/Tryunfo-gif.gif";

class Projetos extends React.Component {
  render(){
    return(
      <div className="div-projetos">
        <div className="div-text-projetos">
          <h1>Alguns Projetos de Exemplo:</h1>
          <p>Esses são alguns Projetos que fiz/a fazer durante o curso da Trybe, sendo um deles esse próprio Site Pessoal.</p>
        </div>
        <div className="div-img-projetos">
          <label className="label-projetos" htmlFor="trybewarts">
            Projeto Trybewarts Responsivo
            <p className="p-projetos">Link do Site:
            <a className="links-projetos" href="https://dimyleo.github.io/Projeto-Trybewarts-Responsivo/" target="_blank" rel="noreferrer">Abrir</a>
            </p>
            <img className="projetos" src={ProjetoTrybewarts} alt="Projeto Trybewarts Responsivo"/>
          </label>
          <label className="label-projetos">
            Projeto Tryunfo
            <p className="p-projetos">Link do Site:
            <a className="links-projetos" href="https://dimyleo.github.io/Projeto-Tryunfo-Cards-Personalizaveis/" target="_blank" rel="noreferrer">Abrir</a>
            </p>
            <img className="projetos" src={ProjetoTryunfo} alt="Projeto Tryunfo"/>
          </label>
          <label className="label-projetos">
            Projeto
            <p className="p-projetos">Link do Site:
            <a className="links-projetos" href="d" target="_blank" rel="noreferrer">Abrir</a>
            </p>
            <img className="projetos" src={Projeto} alt="Projeto"/>
          </label>
        </div>
      </div>
    )
  }
}

export default Projetos;