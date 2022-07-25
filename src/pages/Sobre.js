import React from "react";

class Sobre extends React.Component {
  render(){
    return(
      <div className="sobre">
        <img id="cartoon" src="https://images2.imgbox.com/7a/03/Trr1aOFg_o.png" alt="Cartoon Meu"/>
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