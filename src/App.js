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
        <Switch>
          <Route exact path="/" component={Sobre} />
          <Route path="/habilidades" component={Habilidades} />
          <Route path="/projetos" component={Projetos} />
          <Route path="/contato" component={Contato} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
