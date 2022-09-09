import './Projetos.css';

function Projetos() {
    return(
      <div className="div-projetos">
        <div className="div-text-projetos">
          <h1>Alguns Projetos de Exemplo:</h1>
          <p>Esses são alguns Projetos que fiz/a fazer durante o curso da Trybe, sendo um deles esse próprio Site Pessoal.</p>
        </div>
        <div className="div-img-projetos">

          <div className="container-project">
            <h2 className="titulo-projetos">Projeto Trybewarts Responsivo</h2>
            <p className="descrição-projetos">Esse projeto é um site de um formulario escolar responsivo e validado, clique no link abaixo para testar.</p>
            <p className="p-projetos">Clique sobre a imagem para abrir site ⇩</p>
            <a href="https://dimyleo.github.io/Projeto-Trybewarts-Responsivo/" target="_blank" className="comentario" rel="noreferrer"><h2>Clique para abrir o site</h2></a>
              <img className="projetos" src="https://images2.imgbox.com/24/5a/zpgTgHEP_o.jpg" alt="Projeto Trybewarts Responsivo"/>
          </div>

          <div className="container-project">
            <h2 className="titulo-projetos">Projeto Tryunfo</h2>
            <p className="descrição-projetos">Esse projeto é um site onde você pode criar cards personalizados, clique no link abaixo para testar.</p>
            <p className="p-projetos">Clique sobre a imagem para abrir site ⇩</p>
            <a href="https://dimyleo.github.io/Projeto-Tryunfo-Cards-Personalizaveis/" target="_blank" className="comentario" rel="noreferrer"><h2>Clique para abrir o site</h2></a>
            <img className="projetos" src="https://images2.imgbox.com/7a/32/XE9SfU0d_o.jpg" alt="Projeto Tryunfo"/>
          </div>

          <div className="container-project">
            <h2 className="titulo-projetos">Projeto RTL no Pokedex</h2>
            <p className="descrição-projetos">Esse projeto é um site onde você pode visualizar as Pokedex e tem o projetos com tests em React Testing Library, clique no link abaixo para testar.</p>
            <p className="p-projetos">Clique sobre a imagem para abrir site ⇩</p>
            <a href="https://dimyleo.github.io/Projeto-RTL-com-Pokedex/" target="_blank" className="comentario" rel="noreferrer"><h2>Clique para abrir o site</h2></a>
            <img className="projetos" src="https://images2.imgbox.com/5d/fc/nzGKCbC9_o.jpg" alt="Projeto"/>
          </div>

          <div className="container-project">
            <h2 className="titulo-projetos">Projeto Trivia</h2>
            <p className="descrição-projetos">Esse é um projeto em grupo onde foi feito um site onde você pode jogar Trivia um jogo de perguntas e respostas, clique no link abaixo para testar.</p>
            <p className="p-projetos">Clique sobre a imagem para abrir site ⇩</p>
            <a href="https://dimyleo.github.io/Projeto-Trivia/" target="_blank" className="comentario" rel="noreferrer"><h2>Clique para abrir o site</h2></a>
            <img className="projetos" src="https://images2.imgbox.com/63/9a/jUSThz0Y_o.jpg" alt="Projeto"/>
          </div>

          <div className="container-project">
            <h2 className="titulo-projetos">Projeto App de Receitas</h2>
            <p className="descrição-projetos">Esse é o um Projeto em grupo feito em React com ContextAPI, avaliando a criação de um app de Receitas que instrui e ensina receitas, é tambem avaliado as habilidades de trabalhar em grupo.</p>
            <p className="p-projetos">Clique sobre a imagem para abrir site ⇩</p>
            <a href="https://dimyleo.github.io/Projeto-App-de-Receitas/" target="_blank" className="comentario-celular" rel="noreferrer"><h2>Clique para abrir o site</h2></a>
            <img className="projetos" id="app-receitas" src="https://images2.imgbox.com/60/4d/riUtMw24_o.jpg" alt="Projeto"/>
          </div>

          <div className="container-project">
            <h2 className="titulo-projetos">Projeto</h2>
            <p className="descrição-projetos">Projeto Futuro...</p>
            <p className="p-projetos">Clique sobre a imagem para abrir site ⇩</p>
            <a href="d" target="_blank" className="comentario" rel="noreferrer"><h2>Clique para abrir o site</h2></a>
            <img className="projetos" src="https://images2.imgbox.com/6e/33/jZElQvv5_o.png" alt="Projeto"/>
          </div>
          <a href='#top' className='div-bottom-top-img back-top'>
            <img className='img-bottom-top' src='https://images2.imgbox.com/1b/05/RArfC3w5_o.png' alt='bottom-img' />
            <h2>BACK TOP</h2>
          </a>
        </div>
      </div>
    )
}

export default Projetos;