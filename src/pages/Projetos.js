import React from "react";

class Projetos extends React.Component {
  render(){
    return(
      <div className="div-projetos">
        <div className="div-text-projetos">
          <h1>Alguns Projetos de Exemplo:</h1>
          <p>Esses são alguns Projetos que fiz/a fazer durante o curso da Trybe, sendo um deles esse próprio Site Pessoal.</p>
        </div>

        <div className="div-img-projetos">
          <h2 className="titulo-projetos">Projeto Trybewarts Responsivo</h2>
          <p className="descrição-projetos">Esse projeto é um site de um formulario escolar responsivo e validado, clique no link abaixo para testar.</p>
          <p className="p-projetos">Link do Site:
            <a className="links-projetos" href="https://dimyleo.github.io/Projeto-Trybewarts-Responsivo/" target="_blank" rel="noreferrer">Abrir</a>
          </p>
          <img className="projetos" src="https://images2.imgbox.com/dc/26/8t87YSqG_o.jpg" alt="Projeto Trybewarts Responsivo"/>

          <h2 className="titulo-projetos">Projeto Tryunfo</h2>
          <p className="descrição-projetos">Esse projeto é um site onde você pode criar cards personalizados, clique no link abaixo para testar.</p>
          <p className="p-projetos">Link do Site:
            <a className="links-projetos" href="https://dimyleo.github.io/Projeto-Tryunfo-Cards-Personalizaveis/" target="_blank" rel="noreferrer">Abrir</a>
          </p>
          <img className="projetos" src="https://images2.imgbox.com/88/d5/NsJGMAK8_o.jpg" alt="Projeto Tryunfo"/>

          <h2 className="titulo-projetos">Projeto</h2>
          <p className="descrição-projetos">Projeto Futuro...</p>
          <p className="p-projetos">Link do Site:
            <a className="links-projetos" href="d" target="_blank" rel="noreferrer">Abrir</a>
          </p>
          <img className="projetos" src="https://images2.imgbox.com/6e/33/jZElQvv5_o.png" alt="Projeto"/>
        </div>

      </div>
    )
  }
}

export default Projetos;