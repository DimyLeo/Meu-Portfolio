import { BsGithub } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import projetos from '../data/Projetos';
import './Projetos.css';

function Projetos() {

  const handleClick = () => {
    window.scrollTo(0, 0);
  }

    return(
      <div className="div-projetos">
        <img className="right-raio" src="https://images2.imgbox.com/e0/0f/fV1dK5s9_o.png" alt="right-raio" />

          <Fade top>
            <div className="head-projetos">
              <h1>Projetos</h1>
              <p>Esses são alguns Projetos que fiz/a fazer durante o curso da Trybe, sendo um deles esse próprio Site Pessoal.</p>
            </div>
          </Fade>

            <div className='container'>
              {projetos.map((index) => {
                return (
                  <Fade bottom>
                <div key={index.id} className={`projeto${index.id} details-projeto`}>
                  <h2>{index.title}</h2>
                  <p>{index.describe}</p>
                  <p>Clique sobre a imagem para abrir o site ⇩</p>
                  <a className='link-site' href={index.link} target='blank'>
                    Clique para abrir o site
                  </a>
                  <img className='img-projetos' src={index.img} alt='img' />
                  <a className='github-link' href={index.github} target='blank'>Repositório<BsGithub className='github-icon' /></a>
                </div>
                </Fade>
              )})}
            </div>

          <button onClick={handleClick} className='div-bottom-top-img back-top'>
            <img className='img-bottom-top' src='https://images2.imgbox.com/1b/05/RArfC3w5_o.png' alt='bottom-img' />
            <h1>BACK TOP</h1>
          </button>
        <img className="left-raio-projetos" src="https://images2.imgbox.com/ab/ab/lweyN9zP_o.png" alt="left-raio" />
      </div>
    )
}

export default Projetos;