import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import MyContext from "./context/MyContext";
import Contato from "./pages/Contato";
import Habilidades from "./pages/Habilidades";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";

function App() {
  const {theme} = useContext(MyContext);

  return (
    <div className={theme ? 'App dark' : 'App light'}>
      <Header />
        <img className="right-raio" src="https://images2.imgbox.com/e0/0f/fV1dK5s9_o.png" alt="right-raio" />
        <Switch>
          <Route exact path="/Meu-Portfolio" component={Sobre} />
          <Route path="/habilidades" component={Habilidades} />
          <Route path="/projetos" component={Projetos} />
          <Route path="/contato" component={Contato} />
        </Switch>
        <img className="left-raio" src="https://images2.imgbox.com/ab/ab/lweyN9zP_o.png" alt="left-raio" />
      <Footer />
    </div>
  );
}

export default App;
