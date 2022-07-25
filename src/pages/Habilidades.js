import React from "react";

class Habilidades extends React.Component {
  render(){
    return(
      <div className="div-habilidades">
        <div className="div-text-habilidades">
          <h1>Habilidades:</h1>
          <p>Esses são algumas tecnologias que tenho utilizado para o Desenvolvimento Web e ultilizei para construir este site sendo elas <b>HTML, CSS, JavaScript, React, Git...</b> E estou estudando para me tornar um Desenvolvedor Web FullStack.</p>
        </div>
        <div className="div-icons-habilidades">
          <img className="icons-habilidades" src="https://images2.imgbox.com/44/df/mFzCCOb8_o.png" alt="Icon HTML"/>
          <img className="icons-habilidades" src="https://images2.imgbox.com/22/da/qdaOVl7j_o.png" alt="Icon CSS"/>
          <img className="icons-habilidades" src="https://images2.imgbox.com/09/9b/ayAS7nda_o.png" alt="Icon JS"/>
          <img className="icons-habilidades" src="https://images2.imgbox.com/e9/31/yNE1jsAU_o.png" alt="Icon REACT"/>
          <img className="icons-habilidades" src="https://images2.imgbox.com/c0/02/Q1w9MBfl_o.png" alt="Icon GIT"/>
        </div>
      </div>
    )
  }
}

export default Habilidades;