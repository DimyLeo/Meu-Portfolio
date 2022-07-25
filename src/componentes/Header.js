import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render(){
    return(
      <header>
        <a href="https://dimyleo.github.io/Meu-Portfolio"><img id="logo" src="https://images2.imgbox.com/ee/49/Hi1SGH3A_o.png" alt="Logo"/></a>
          <nav>
              <Link to="/Meu-Portfolio" > Sobre-min </Link>
              <Link to="/habilidades" > Habilidades </Link>
              <Link to="/projetos" > Projetos </Link>
              <a href="#contato">Contato</a>
          </nav>
          <div className="div-icons-redes">
            <a href="https://github.com/DimyLeo" target="_blank" rel="noreferrer"><img className="icons-redes" src="https://images2.imgbox.com/2a/6e/LTwpVSQx_o.png" alt="Icon GitHub"/></a>
            <a href="https://www.linkedin.com/in/leo-cavalcante-701713235/" target="_blank" rel="noreferrer"><img className="icons-redes" src="https://images2.imgbox.com/9c/32/2RzAcNdo_o.png" alt="Icon Linkedin"/></a>
          </div>
      </header>
    )
  }
}

export default Header;