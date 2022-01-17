import { useState } from "react";
import "bootswatch/dist/morph/bootstrap.min.css";
import Home from "./pages/Home";

import "./styles/App.css"

const initialState = {
  numeroInicial: 1,
  numeroFinal: 60,
  fichaActual: 10,
  letraActual: "B",
  fichasSelecionadas: [],
  tipoDiscado:'A',
  precioCarton: 200,
  jugadores: []
}

function App() {

  const [ state, setState ] = useState( initialState )

  return (
    <div className="app">
      <Home state={state} setState={setState} />
    </div>
  );
}

export default App;
