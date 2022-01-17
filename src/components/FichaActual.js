import CounterTime from "./CounterTime";

import "../styles/FichaActual.css";

const FichaActual = ({ data, setState }) => {
  return (
    <>
      <div className="card bg-secondary mb-3">
        <div className="card-header">Ficha</div>
        <div className="card-body text-center">
          <h4 className="card-title">{data.letraActual}</h4>
          <h4 className="card-title">{data.fichaActual}</h4>
          <CounterTime
            setState={setState}
            data={{
              numeroInicial: data.numeroInicial,
              numeroFinal: data.numeroFinal,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default FichaActual;
