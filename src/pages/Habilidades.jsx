import { BsFillBootstrapFill } from 'react-icons/bs';
import { FaGitSquare, FaNode, FaReact } from 'react-icons/fa';
import { SiCss3, SiHtml5, SiJavascript, SiJest, SiReactrouter, SiRedux, SiTestinglibrary } from 'react-icons/si';
import './Habilidades.css';

function Habilidades() {
    return(
      <div className='body-habili'>
        <div className="div-habilidades" id='habilidades'>
        <img className="right-raio" src="https://images2.imgbox.com/e0/0f/fV1dK5s9_o.png" alt="right-raio" />
          <div className="div-text-habilidades">
            <h1>Habilidades:</h1>
            <p>Esses são algumas tecnologias que tenho utilizado para o Desenvolvimento Web e ultilizei para construir este site sendo elas <b>HTML, CSS, JavaScript, React, Git...</b> E estou estudando para me tornar um Desenvolvedor Web FullStack.</p>
          </div>
          <div className="div-icons-habilidades">
            <div className='div-icons'>
              <h3>JavaScript</h3>
              <SiJavascript className="icons-habilidades" />
            </div>

            <div className='div-icons'>
              <h3>React</h3>
              <FaReact className="icons-habilidades" />
            </div>

            <div className='div-icons'>
              <h3>Redux</h3>
              <SiRedux className="icons-habilidades" />
            </div>

            <div className='div-icons'>
              <h3>React Router</h3>
              <SiReactrouter className="icons-habilidades" />
            </div>

            <div className='div-icons'>
              <h3>React Testing</h3>
              <SiTestinglibrary className="icons-habilidades" />
            </div>

            <div className='div-icons'>
              <h3>Jest Tests</h3>
              <SiJest className="icons-habilidades" />
            </div>

            <div className='div-icons'>
              <h3>Node JS</h3>
              <FaNode className="icons-habilidades" />
            </div>

            <div className='div-icons'>
              <h3>HTML 5</h3>
              <SiHtml5 className="icons-habilidades" />
            </div>

            <div className='div-icons'>
            <h3>CSS 3</h3>
              <SiCss3 className="icons-habilidades" />
            </div>

            <div className='div-icons'>
              <h3>Bootstrap</h3>
              <BsFillBootstrapFill className="icons-habilidades" />
            </div>

            <div className='div-icons'>
              <h3>Git</h3>
              <FaGitSquare className="icons-habilidades" />
            </div>
          </div>
          <img className="left-raio" src="https://images2.imgbox.com/ab/ab/lweyN9zP_o.png" alt="left-raio" />
        </div>
        <div className='div-bottom-habilites'>
          <img className='img-btm-habilites' src='https://images2.imgbox.com/28/57/jRjEjxqr_o.png' alt='bottom-img' />
        </div>
      </div>
    )
}

export default Habilidades;