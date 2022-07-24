import React from "react";
import IconCSS from "../img/icon-CSS.png";
import IconGIT from "../img/icon-GIT.png";
import IconHTML from "../img/icon-HTML.png";
import IconJS from "../img/icon-JAVASCRIPT.png";
import IconREACT from "../img/icon-REACT.png";

class Habilidades extends React.Component {
  render(){
    return(
      <div className="div-habilidades">
        <div className="div-text-habilidades">
          <h1>Habilidades:</h1>
          <p>Esses são algumas tecnologias que tenho utilizado para o Desenvolvimento Web e ultilizei para construir este site sendo elas <b>HTML, CSS, JavaScript, React, Git...</b> E estou estudando para me tornar um Desenvolvedor Web FullStack.</p>
        </div>
        <div className="div-icons-habilidades">
          <img className="icons-habilidades" src={IconHTML} alt="Icon HTML"/>
          <img className="icons-habilidades" src={IconCSS} alt="Icon CSS"/>
          <img className="icons-habilidades" src={IconJS} alt="Icon JS"/>
          <img className="icons-habilidades" src={IconREACT} alt="Icon REACT"/>
          <img className="icons-habilidades" src={IconGIT} alt="Icon GIT"/>
        </div>
      </div>
    )
  }
}

export default Habilidades;