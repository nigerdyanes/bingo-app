import { useEffect, useState } from "react";

import { getRandomNumber, getLetraNumber } from "../shared/utils";

const CounterTime = ({ setState, data }) => {
  const [seconds, setSeconds] = useState(0);
  const { numeroInicial, numeroFinal } = data;

  useEffect(() => {

    if (seconds >= 10) {
      const newFichaActual = getRandomNumber(numeroInicial, numeroFinal);
      const newLetraActual = getLetraNumber(newFichaActual);
      setSeconds(0);
      setState(state => ({
        ...state,
        fichaActual: newFichaActual,
        letraActual: newLetraActual
      }))
    }

    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);

  }, [seconds, numeroInicial, numeroFinal, setState]);


  return (
    <>
      <h4 className="card-title">{seconds}</h4>
    </>
  );
};

export default CounterTime;
