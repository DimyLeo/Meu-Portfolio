import React from "react";
import { Link } from "react-router-dom";
import IconGitHub from '../img/icon-GITHUB.png';
import IconLinkedin from '../img/icon-LINKEDIN.png';
import Logo from '../img/logo-pronta.png';

class Header extends React.Component {
  render(){
    return(
      <header>
        <img id="logo" src={Logo} alt="Logo"/>
          <nav>
            <Link to="/" > Sobre-min </Link>
            <Link to="/habilidades" > Habilidades </Link>
            <Link to="/projetos" > Projetos </Link>
            <a href="#contato">Contato</a>
          </nav>
          <div>
            <img className="icons-redes" src={IconGitHub} alt="Icon GitHub"/>
            <img className="icons-redes" src={IconLinkedin} alt="Icon Linkedin"/>
          </div>
      </header>
    )
  }
}

export default Header;