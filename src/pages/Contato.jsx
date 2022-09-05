import copy from "copy-to-clipboard";
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { MdAttachEmail } from 'react-icons/md';

function Contato() {

  const copyToClipboard = () => {
    copy('leonardoprimoc@hotmail.com');
    alert('Email copiado!');
  }

  return (
    <div className="div-contato">
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
          <label htmlFor="name">
            <input type='text' name="name" className="name-email" placeholder="Digite seu Nome" required />
          </label>

          <label htmlFor="email">
            <input type='text' name="email" className="email-user" placeholder="Digite seu Email" required />
          </label>

          <label htmlFor="msg">
            <textarea type='text' className="msg-user" placeholder="Digite sua mensagem" />
          </label>

          <div className="btns-email">
            <button className="submit-msg" type="submit">Enviar</button>
            <button className="limpar-msg" type="reset">Limpar</button>
          </div>
        </form>
    </div>
  )
}

export default Contato;