
import Stock from "./Stock";

function PortfolioContainer({portfolioList, handleDeleteClick, handleClick}) {

  const isClicked = true;


  const stockCards = portfolioList.map(({id, ticker, name, type, price}) => 
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
      <h2>My Portfolio</h2>
      {
        stockCards
      }
    </div>
  );
}

export default PortfolioContainer;
