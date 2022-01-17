const FichaSelecionada = ({ data }) => {
  const { index, numero } = data;
  return (
    <>
      <li className="list-group-item list-group-item-action">
        <h5>{index} {numero}</h5>
      </li>
    </>
  );
};

export default FichaSelecionada;
