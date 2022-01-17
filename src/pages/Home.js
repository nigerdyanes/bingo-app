import FichaActual from "../components/FichaActual";
import FichasSelecionadas from "../components/FichasSelecionadas";
import ListaJugadores from "../components/ListaJugadores";
import Parametros from "../components/Parametros";

import "../styles/Home.css";

const Home = ({ state, setState }) => {

  const { letraActual, fichaActual, numeroInicial, numeroFinal } = state;
  return (
    <div className="main">
      <Parametros />
      <div className="container">
        <div className="ficha_seleccionada">
          <FichaActual data={{ letraActual, fichaActual, numeroInicial, numeroFinal }} setState={setState} />
        </div>
        <FichasSelecionadas />
      </div>
      <div className="actions">
        <button type="button" className="btn btn-primary">Automático</button>
        <button type="button" className="btn btn-primary">Manual</button>
        <button type="button" className="btn btn-primary">Nueva partida</button>
      </div>
      <div className="container">
        <ListaJugadores />
      </div>
    </div>
  );
};

export default Home;
