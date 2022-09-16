import { BsFillBootstrapFill } from 'react-icons/bs';
import { FaGitSquare, FaNode, FaReact } from 'react-icons/fa';
import { SiCss3, SiHtml5, SiJavascript, SiJest, SiReactrouter, SiRedux, SiTestinglibrary } from 'react-icons/si';
import Fade from 'react-reveal/Fade';
import './Habilidades.css';

function Habilidades() {

  const handleClick = () => {
    window.scrollTo(0, 0);
  }

    return(
      <div className='body-habili'>
        <div className="div-habilidades">
        <img className="right-raio" src="https://images2.imgbox.com/e0/0f/fV1dK5s9_o.png" alt="right-raio" />
        <Fade top>
          <div className="div-text-habilidades">
            <h1>Habilidades</h1>
            <p>Esses são algumas tecnologias que tenho utilizado para o Desenvolvimento Web e ultilizei para construir este site sendo elas <b>HTML, CSS, JavaScript, React, Git...</b> E estou estudando para me tornar um Desenvolvedor Web FullStack.</p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="div-icons-habilidades">
            <div className='div-icons1'>
              <h3>JavaScript</h3>
              <SiJavascript className="icons-habilidades" />
            </div>

            <div className='div-icons2'>
              <h3>React</h3>
              <FaReact className="icons-habilidades" />
            </div>

            <div className='div-icons1'>
              <h3>Redux</h3>
                <SiRedux className="icons-habilidades" />
            </div>

            <div className='div-icons2'>
              <h3>React Router</h3>
              <SiReactrouter className="icons-habilidades" />
            </div>

            <div className='div-icons1'>
              <h3>React Testing</h3>
              <SiTestinglibrary className="icons-habilidades" />
            </div>

            <div className='div-icons2'>
              <h3>Jest Tests</h3>
              <SiJest className="icons-habilidades" />
            </div>

            <div className='div-icons1'>
              <h3>Node JS</h3>
              <FaNode className="icons-habilidades" />
            </div>

            <div className='div-icons2'>
              <h3>HTML 5</h3>
              <SiHtml5 className="icons-habilidades" />
            </div>

            <div className='div-icons1'>
            <h3>CSS 3</h3>
            <SiCss3 className="icons-habilidades" />
            </div>

            <div className='div-icons2'>
              <h3>Bootstrap</h3>
              <BsFillBootstrapFill className="icons-habilidades" />
            </div>

            <div className='div-icons1'>
              <h3>Git</h3>
              <FaGitSquare className="icons-habilidades" />
            </div>
          </div>
          </Fade>
          <img className="left-raio" src="https://images2.imgbox.com/ab/ab/lweyN9zP_o.png" alt="left-raio" />
        </div>
        <button onClick={handleClick} className='div-bottom-top-img back-top-h'>
          <img className='img-bottom-top' src='https://images2.imgbox.com/1b/05/RArfC3w5_o.png' alt='bottom-img' />
          <h1>BACK TOP</h1>
        </button>
      </div>
    )
}

export default Habilidades;