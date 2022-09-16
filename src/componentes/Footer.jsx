import { BsPhone } from 'react-icons/bs';
import { MdAttachEmail } from 'react-icons/md';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {

const soundEfect = () => {
  const sound = document.querySelector('audio');
  sound.play();
}

    return(
      <footer>
        <nav>
          <Link onClick={soundEfect} to="/" > Sobre-min </Link>
          <Link onClick={soundEfect} to="/habilidades" > Habilidades </Link>
          <Link onClick={soundEfect} to="/projetos" > Projetos </Link>
          <Link onClick={soundEfect} to="/contato">Contato</Link>
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