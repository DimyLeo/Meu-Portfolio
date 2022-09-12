import { useContext } from "react";
import { BsPhone } from 'react-icons/bs';
import { MdAttachEmail } from 'react-icons/md';
import { Link } from "react-router-dom";
import MyContext from "../context/MyContext";
import './Footer.css';

function Footer() {
  const {theme} = useContext(MyContext);

    return(
      <footer className={theme ? 'dark-footer' : 'light-footer'}>
        <nav>
          <Link className={theme ? 'dark-header' : 'links-light'} to="/Meu-Portfolio" > Sobre-min </Link>
          <Link className={theme ? 'dark-header' : 'links-light'} to="/habilidades" > Habilidades </Link>
          <Link className={theme ? 'dark-header' : 'links-light'} to="/projetos" > Projetos </Link>
          <Link className={theme ? 'dark-header' : 'links-light'} to="/contato">Contato</Link>
        </nav>
        <div className="contatos-footer">
          <h2>Contatos</h2>
            <span className="itens-contatos"><BsPhone className="icons-footer" /><p>(67)999094613</p></span>
            <span className="itens-contatos"><MdAttachEmail className="icons-footer" /><p>leonardoprimoc@hotmail.com</p></span>
        </div>
        <p id={theme ? 'copy' : 'copy-light'}>© Copyright DimyLeo - 2022</p>
      </footer>
    )
}

export default Footer;