import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import NotFound from "./componentes/NotFound";
import Habilidades from "./pages/Habilidades";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/Meu-Portfolio" component={Sobre} />
          <Route path="/habilidades" component={Habilidades} />
          <Route path="/projetos" component={Projetos} />
          <Route patch="" component={NotFound}/>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
