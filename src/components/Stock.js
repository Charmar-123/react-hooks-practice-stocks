

function Stock({ id, ticker, name, type, price, handleClick, handleDeleteClick, isClicked, handleClickFunction }) {


  const onCardClick = () => {
    handleClick(id);
  }

  const onCardDelete = () => {
    handleDeleteClick(id);
  }


  return (
    <div onClick={isClicked ? onCardDelete : onCardClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
