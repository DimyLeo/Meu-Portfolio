import { BsPhone } from 'react-icons/bs';
import { MdAttachEmail } from 'react-icons/md';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {

    return(
      <footer>
        <nav>
          <Link to="/" > Sobre-min </Link>
          <Link to="/habilidades" > Habilidades </Link>
          <Link to="/projetos" > Projetos </Link>
          <Link to="/contato">Contato</Link>
        </nav>
        <div className="contatos-footer">
          <h2>Contatos</h2>
            <span className="itens-contatos"><BsPhone className="icons-footer" /><p>(67)999094613</p></span>
            <span className="itens-contatos"><MdAttachEmail className="icons-footer" /><p>leonardoprimoc@hotmail.com</p></span>
        </div>
        <p id='copy'>© Copyright DimyLeo - 2022</p>
      </footer>
    )
}

export default Footer;