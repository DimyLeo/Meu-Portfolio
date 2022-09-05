import { Link } from "react-router-dom";

function Footer() {
    return(
      <footer>
        <nav>
          <Link to="/" > Sobre-min </Link>
          <Link to="/habilidades" > Habilidades </Link>
          <Link to="/projetos" > Projetos </Link>
          <a href="#contato">Contato</a>
        </nav>
        <div>
          <h2>Contatos</h2>
          <p id="contato">Celular: (67)999094613</p>
          <p>Email: leonardoprimoc@hotmail.com</p>
        </div>
        <p id="copy">© Copyright DimyLeo - 2022</p>
      </footer>
    )
}

export default Footer;