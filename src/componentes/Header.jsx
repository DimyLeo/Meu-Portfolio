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
    console.log(theme)
  }

    return(
      <header className={theme ? 'dark-header' : 'light-header-footer'}>
        <div className="div-logo">
          <a href="https://dimyleo.github.io/Meu-Portfolio"><img id="logo" src="https://images2.imgbox.com/ee/49/Hi1SGH3A_o.png" alt="Logo"/></a>
          <h3>LEO</h3><p>CAVALCANTE</p>
        </div>
          <div className="links-and-dark-mode"> 

            <div onClick={ToggleMode}>
              <img src={active ? 'https://images2.imgbox.com/ac/69/YihMkIjJ_o.png' : "https://images2.imgbox.com/4b/75/ljggGs4T_o.png"} alt="ham-icon" className="hamburguer hamburguerIcon" />
            </div>

            <div style={{backgroundColor: theme ? '#2c2c2c' : '#939393'}} className={active ? 'menu menuOpen' : 'menu menuClose'}>
              <nav className='list'>
                <div className='listItems'>
                  <Link className={theme ? 'dark-header' : 'links-light'} to="/Meu-Portfolio" > Sobre-min </Link>
                  <Link className={theme ? 'dark-header' : 'links-light'} to="/habilidades" > Habilidades </Link>
                  <Link className={theme ? 'dark-header' : 'links-light'} to="/projetos" > Projetos </Link>
                  <Link className={theme ? 'dark-header' : 'links-light'} to="/contato"> Contato </Link>
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