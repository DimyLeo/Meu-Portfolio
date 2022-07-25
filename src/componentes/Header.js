import React from "react";
import { Link } from "react-router-dom";
import IconGitHub from '../img/icon-GITHUB.png';
import IconLinkedin from '../img/icon-LINKEDIN.png';
import Logo from '../img/logo-pq.png';

class Header extends React.Component {
  render(){
    return(
      <header>
        <a href="https://dimyleo.github.io/Meu-Portfolio"><img id="logo" src={Logo} alt="Logo"/></a>
          <nav>
              <Link to="/Meu-Portfolio" > Sobre-min </Link>
              <Link to="/habilidades" > Habilidades </Link>
              <Link to="/projetos" > Projetos </Link>
              <a href="#contato">Contato</a>
          </nav>
          <div className="div-icons-redes">
            <a href="https://github.com/DimyLeo" target="_blank" rel="noreferrer"><img className="icons-redes" src={IconGitHub} alt="Icon GitHub"/></a>
            <a href="https://www.linkedin.com/in/leo-cavalcante-701713235/" target="_blank" rel="noreferrer"><img className="icons-redes" src={IconLinkedin} alt="Icon Linkedin"/></a>
          </div>
      </header>
    )
  }
}

export default Header;