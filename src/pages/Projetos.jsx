import { useContext } from 'react';
import MyContext from '../context/MyContext';
import projetos from '../data/Projetos';
import './Projetos.css';

function Projetos() {
  const {theme} = useContext(MyContext);

    return(
      <div className="div-projetos">
        <img className="right-raio" src="https://images2.imgbox.com/e0/0f/fV1dK5s9_o.png" alt="right-raio" />

          <div className="head-projetos">
            <h1>Alguns Projetos de Exemplo</h1>
            <p>Esses são alguns Projetos que fiz/a fazer durante o curso da Trybe, sendo um deles esse próprio Site Pessoal.</p>
          </div>

            <div className='container'>
              {projetos.map((index) => {
                return (
                <div key={index.id} className={theme ? `projeto${index.id} details-projeto dark-projeto` : `projeto${index.id} details-projeto light-projeto`}>
                  <h2>{index.title}</h2>
                  <p>{index.describe}</p>
                  <p>Clique Sobre a imagem para abrir o site ⇩</p>
                  <a href={index.link} target='blank'>
                    Clique para abrir o site
                  </a>
                    <img className='img-projetos' src={index.img} alt='img' />
                </div>
              )})}
            </div>

          <a href='#top' className='div-bottom-top-img back-top'>
            <img className='img-bottom-top' src='https://images2.imgbox.com/1b/05/RArfC3w5_o.png' alt='bottom-img' />
            <h2>BACK TOP</h2>
          </a>
        <img className="left-raio-projetos" src="https://images2.imgbox.com/ab/ab/lweyN9zP_o.png" alt="left-raio" />
      </div>
    )
}

export default Projetos;