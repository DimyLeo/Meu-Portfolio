import copy from "copy-to-clipboard";
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { MdAttachEmail } from 'react-icons/md';
import './Contato.css';

function Contato() {

  const copyToClipboard = () => {
    copy('leonardoprimoc@hotmail.com');
    alert('Email copiado!');
  }

  return (
    <div className="div-contato" id="contato">
      <img className="right-raio" src="https://images2.imgbox.com/e0/0f/fV1dK5s9_o.png" alt="right-raio" />
      <div className="head-contato">
        <h1>Contatos</h1>
        <p>Estes são alguns meios de entrar em contato comigo</p>
      </div>
      <div className="div-icons-redes">
        <button className="button-copy email-copy" type="button" onClick={copyToClipboard}><MdAttachEmail className="icons-react" /></button>
        <a className="button-copy" href="https://github.com/DimyLeo" target="_blank" rel="noreferrer"><BsGithub className="icons-react" /></a>
        <a className="button-copy" href="https://www.linkedin.com/in/leo-cavalcante-primo/" target="_blank" rel="noreferrer"><BsLinkedin className="icons-react" /></a>
        <a className="button-copy" href="https://www.instagram.com/leo_primo_c/" target="_blank" rel="noreferrer"><BsInstagram className="icons-react" /></a>
      </div>

        <form className="form-email" action="https://formsubmit.co/6e69740e8f8692ba27cb868e0aba4ff6" method="POST">
          <h2>Me envie uma mensagem!</h2>
          <label htmlFor="Nome">
            <input type='text' name="Nome" className="name-email" placeholder="Digite seu Nome" required />
          </label>

          <label htmlFor="Email">
            <input type='text' name="Email" className="email-user" placeholder="Digite seu Email" required />
          </label>

          <label htmlFor="Mensagem">
            <textarea type='text' name="Mensagem" className="msg-user" placeholder="Digite sua mensagem" required />
          </label>

          <div className="btns-email">
            <button className="submit-msg" type="submit">Enviar</button>
            <button className="limpar-msg" type="reset">Limpar</button>
          </div>
        </form>
      <img className="left-raio" src="https://images2.imgbox.com/ab/ab/lweyN9zP_o.png" alt="left-raio" />
    </div>
  )
}

export default Contato;