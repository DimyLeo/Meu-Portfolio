import { useContext } from 'react';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { FaGitSquare, FaNode, FaReact } from 'react-icons/fa';
import { SiCss3, SiHtml5, SiJavascript, SiJest, SiReactrouter, SiRedux, SiTestinglibrary } from 'react-icons/si';
import MyContext from '../context/MyContext';
import './Habilidades.css';

function Habilidades() {
  const {theme} = useContext(MyContext);

    return(
      <div className="div-habilidades">
        <div className="div-text-habilidades">
          <h1>Habilidades:</h1>
          <p>Esses são algumas tecnologias que tenho utilizado para o Desenvolvimento Web e ultilizei para construir este site sendo elas <b>HTML, CSS, JavaScript, React, Git...</b> E estou estudando para me tornar um Desenvolvedor Web FullStack.</p>
        </div>
        <div className="div-icons-habilidades">
        <div className='div-icons'>
          <h3>JavaScript</h3>
          <SiJavascript style={{backgroundColor: theme ? '#2c2c2c' : '#939393'}} className="icons-habilidades" />
        </div>

        <div className='div-icons'>
          <h3>React</h3>
          <FaReact style={{backgroundColor: theme ? '#2c2c2c' : '#939393'}} className="icons-habilidades" />
        </div>

        <div className='div-icons'>
          <h3>Redux</h3>
          <SiRedux style={{backgroundColor: theme ? '#2c2c2c' : '#939393'}} className="icons-habilidades" />
        </div>

        <div className='div-icons'>
          <h3>React Router</h3>
          <SiReactrouter style={{backgroundColor: theme ? '#2c2c2c' : '#939393'}} className="icons-habilidades" />
        </div>

        <div className='div-icons'>
          <h3>React Testing</h3>
          <SiTestinglibrary style={{backgroundColor: theme ? '#2c2c2c' : '#939393'}} className="icons-habilidades" />
        </div>

        <div className='div-icons'>
          <h3>Jest Tests</h3>
          <SiJest style={{backgroundColor: theme ? '#2c2c2c' : '#939393'}} className="icons-habilidades" />
        </div>

        <div className='div-icons'>
          <h3>Node JS</h3>
          <FaNode style={{backgroundColor: theme ? '#2c2c2c' : '#939393'}} className="icons-habilidades" />
        </div>

        <div className='div-icons'>
          <h3>HTML 5</h3>
          <SiHtml5 style={{backgroundColor: theme ? '#2c2c2c' : '#939393'}} className="icons-habilidades" />
        </div>

        <div className='div-icons'>
        <h3>CSS 3</h3>
          <SiCss3 style={{backgroundColor: theme ? '#2c2c2c' : '#939393'}} className="icons-habilidades" />
        </div>

        <div className='div-icons'>
          <h3>Bootstrap</h3>
          <BsFillBootstrapFill style={{backgroundColor: theme ? '#2c2c2c' : '#939393'}} className="icons-habilidades" />
        </div>

        <div className='div-icons'>
          <h3>Git</h3>
          <FaGitSquare style={{backgroundColor: theme ? '#2c2c2c' : '#939393'}} className="icons-habilidades" />
        </div>

        </div>
      </div>
    )
}

export default Habilidades;