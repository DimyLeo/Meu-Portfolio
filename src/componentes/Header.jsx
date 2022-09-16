import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import MyContext from "../context/MyContext";
import './Header.css';

function Header () {
  const [active, setMode] = useState(false);
  const {theme, setTheme} = useContext(MyContext);

  const ToggleMode = () => {
    setMode(!active)
  }

  const handleChange = () => {
    setTheme(!theme)
  }

  const soundEfect = () => {
    const sound = document.querySelector('audio');
    sound.play();
  }

    return(
      <header className='header'>
        <div className="div-logo">
          <a href="https://dimyleo.github.io/Meu-Portfolio"><img id="logo" src="https://images2.imgbox.com/02/9c/CSeCpIv1_o.png" alt="Logo"/></a>
          <p>CAVALCANTE</p>
        </div>
          <div className="links"> 

            <div onClick={ToggleMode}>
              <img src={active ? 'https://images2.imgbox.com/0b/b4/Piseshjy_o.png' : "https://images2.imgbox.com/58/ba/kgNOzFkf_o.png"} alt="ham-icon" className="hamburguer hamburguerIcon" />
            </div>

            <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
              <nav className='list'>
                <div className='listItems'>
                  <Link onClick={soundEfect} className={theme ? 'dark-header' : 'links-light'} to="/" > Sobre-min </Link>
                  <Link onClick={soundEfect} className={theme ? 'dark-header' : 'links-light'} to="/habilidades" > Habilidades </Link>
                  <Link onClick={soundEfect} className={theme ? 'dark-header' : 'links-light'} to="/projetos" > Projetos </Link>
                  <Link onClick={soundEfect} className={theme ? 'dark-header' : 'links-light'} to="/contato"> Contato </Link>
                </div>
              </nav>
            </div>

            <span className={theme ? 'line' : 'line-light'} />
            <div className="div-dark-light">
              <label className="switch" htmlFor="dark-light">
                <span className="switch-text">Dark/Light</span>
                <div className="switch-wrapper">
                  <input onChange={handleChange} id="dark-light" type='checkbox' name="dark-light" value={theme} />
                  <span className="switch-button" />
                </div>
              </label>
            </div>
          </div>
      </header>
    )
}

export default Header;