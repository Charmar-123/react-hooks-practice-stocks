
import Stock from "./Stock";

function StockContainer({list, handleClick, handleDeleteClick}) {

  const isClicked = false;


  const stockCards = list.map(({id, ticker, name, type, price}) => 
  <Stock  
  key={id}
  id={id} 
  ticker={ticker} 
  name={name} 
  type={type} 
  price={price}
  handleClick={handleClick}
  handleDeleteClick={handleDeleteClick}
  isClicked={isClicked}
  />)


  return (
    <div>
      <h2>Stocks</h2>
      {stockCards}
    </div>
  );
}

export default StockContainer;
