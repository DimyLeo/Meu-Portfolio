import Fade from 'react-reveal/Fade';
import habilidades from '../data/Habilidades';
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

        {habilidades.map((index) => {
          return (
            <div className="div-icons-habilidades">
              <Fade bottom>
                <div key={index.id} className={index.className}>
                  <h3>{index.h3}</h3>
                  {index.iconReact}
                </div>
              </Fade>
            </div>
          )
        })}

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