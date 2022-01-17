import FichaSelecionada from "./FichaSelecionada";

import "../styles/FichasSeleccionadas.css"

const fichas = [
  {
    index: "B",
    numero: 8,
  },
  {
    index: "I",
    numero: 18,
  },
  {
    index: "N",
    numero: 28,
  },
];

const FichasSelecionadas = () => {
  return (
    <>
      <div className="card bg-secondary mb-3">
        <div className="card-header">Fichas cantadas</div>
        <div className="card-body">
          <ul className="list-group list_fichas">
            {fichas.map((f) => (
              <FichaSelecionada key={f.index} data={f} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FichasSelecionadas;
