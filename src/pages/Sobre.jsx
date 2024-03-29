import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import './Sobre.css';

function Sobre() {

    return(
      <div className="sobre" id='sobre-min'>
        <Fade left>
          <img id="cartoon" src="https://images2.imgbox.com/b7/ca/BNppymAZ_o.png" alt="Cartoon Meu"/>
        </Fade>

        <Fade right>
        <div className="text-sobre">
          <div className='name-sobre'>
            <h1>Olá, me chamo Leonardo Cavalcante Primo</h1>
            {/* <img className='smile-sobre' src='https://images2.imgbox.com/35/61/7uVGI08Q_o.png' alt='smile' /> */}
          </div>
            <h2 className='text-sobre-min'>Sobre min:</h2>
            <p className='text-sobre-min'>
              Sou Desenvolvedor Web me formando na Trybe, moro no Brasil no estado do Mato Grosso do Sul em Bataguassu, tenho 20 anos de idade, cursei 1 termo de Direito até decidir seguir carreira na programação, em Desenvolvimento Web.
            </p>
          <div className="div-icons-redes">
            <a className="button-copy" href="https://github.com/DimyLeo" target="_blank" rel="noreferrer"><BsGithub className="icons-react" /></a>
            <a className="button-copy" href="https://www.linkedin.com/in/leo-cavalcante-primo/" target="_blank" rel="noreferrer"><BsLinkedin className="icons-react" /></a>
          </div>
          <div className='div-bottom-top-img'>
            <img className='img-bottom-top' src='https://images2.imgbox.com/28/57/jRjEjxqr_o.png' alt='bottom-img' />
          </div>
        </div>
        </Fade>

      </div>
    )
}

export default Sobre;