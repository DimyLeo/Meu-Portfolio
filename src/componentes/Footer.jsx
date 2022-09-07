import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../context/MyContext";
import './Footer.css';

function Footer() {
  const {theme} = useContext(MyContext);

    return(
      <footer className={theme ? 'dark-footer' : 'light-header-footer'}>
        <nav>
          <Link className={theme ? 'dark-footer' : 'links-light'} to="/" > Sobre-min </Link>
          <Link className={theme ? 'dark-footer' : 'links-light'} to="/habilidades" > Habilidades </Link>
          <Link className={theme ? 'dark-footer' : 'links-light'} to="/projetos" > Projetos </Link>
          <Link className={theme ? 'dark-footer' : 'links-light'} to="/contato">Contato</Link>
        </nav>
        <div>
          <h2>Contatos</h2>
          <p>Celular: (67)999094613</p>
          <p>Email: leonardoprimoc@hotmail.com</p>
        </div>
        <p id={theme ? 'copy' : 'copy-light'}>© Copyright DimyLeo - 2022</p>
      </footer>
    )
}

export default Footer;