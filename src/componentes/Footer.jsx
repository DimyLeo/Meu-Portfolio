import { BsPhone } from 'react-icons/bs';
import { MdAttachEmail } from 'react-icons/md';
import './Footer.css';

function Footer() {

const soundEfect = () => {
  const sound = document.querySelector('audio');
  sound.play();
}

    return(
      <footer>
        <div className='left-footer'>
          <span className="itens-contatos"><BsPhone className="icons-footer" /><p>(67)999094613</p></span>
          <span className='line-footer' />
          <span className="itens-contatos"><MdAttachEmail className="icons-footer" /><p>leonardoprimoc@hotmail.com</p></span>
        </div>

        <div className="right-footer">
          <p id='copy'>© Copyright DimyLeo - 2022</p>
        </div>
      </footer>
    )
}

export default Footer;