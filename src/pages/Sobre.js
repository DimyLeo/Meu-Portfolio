import React from "react";
import Cartoon from "../img/cartoon.png";

class Sobre extends React.Component {
  render(){
    return(
      <div className="sobre">
        <img id="cartoon" src={Cartoon} alt="Cartoon Meu"/>
        <div className="text-sobre">
          <h1>Olá, me chamo Leonardo Cavalcante Primo</h1>
            <h2>Sobre min:</h2>
            <p>
              Estou cursando Desenvolvimento Web na Trybe, moro no Brasil no estado do Mato Grosso do Sul em Bataguassu, tenho 19 anos de idade, cursei 1 ano de Direito até decidir seguir carreira na programação, em Desenvolvimento Web.
            </p>
        </div>
      </div>
    )
  }
}

export default Sobre;