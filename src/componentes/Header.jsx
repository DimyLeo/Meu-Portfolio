import { useState } from "react";
import { Link } from "react-router-dom";

function Header () {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active)
  }

    return(
      <header>
        <div className="div-logo">
          <a href="https://dimyleo.github.io/Meu-Portfolio"><img id="logo" src="https://images2.imgbox.com/ee/49/Hi1SGH3A_o.png" alt="Logo"/></a>
          <h3>LEO</h3><p>CAVALCANTE</p>
        </div>
          <div className="links-and-dark-mode"> 

            <div onClick={ToggleMode}>
              <img src={active ? 'https://images2.imgbox.com/ac/69/YihMkIjJ_o.png' : "https://images2.imgbox.com/4b/75/ljggGs4T_o.png"} alt="ham-icon" className="hamburguer hamburguerIcon" />
            </div>

            <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
              <nav className="list">
                <div className="listItems">
                  <Link to="/" > Sobre-min </Link>
                  <Link to="/habilidades" > Habilidades </Link>
                  <Link to="/projetos" > Projetos </Link>
                  <Link to="/contato">Contato</Link>
                </div>
              </nav>
            </div>

            <span className="line" />
            <div className="div-dark-light">
              <label className="switch" htmlFor="dark-light">
                <span className="switch-text">Dark/Light</span>
                <div className="switch-wrapper">
                  <input id="dark-light" type='checkbox' name="dark-light" />
                  <span className="switch-button" />
                </div>
              </label>
            </div>
          </div>
      </header>
    )
}

export default Header;