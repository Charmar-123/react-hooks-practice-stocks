import { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [list, setList] = useState([]);;
  const [portfolioList, setPortfolioList] = useState([]);
  const [id, setId] = useState([]);
  const [selectedType, setSelectedType] = useState(["Tech", "Finance", "Sportswear"]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(res => res.json())
      .then(listData => {
        setList(listData.filter(item => selectedType.includes(item.type)));
        setPortfolioList(listData.filter(item => id.includes(item.id)));

      })
  }, [id, selectedType]);



  const handleClick = (portfolioObj) => {
    setId([...id, portfolioObj]);

  }

  const handleDeleteClick = (deleteID) => {
    setId(id.filter(id => id !== deleteID));

  }


  const handleOnAlphabet = () => {
    setList(list.sort((a, b) => a.name.localeCompare(b.name)));
    setPortfolioList(list.filter(item => id.includes(item.id)).sort());

  }

  const handlePriceFilter = () => {
    setList(list.sort((a,b)=>a.price-b.price));
    setPortfolioList(list.filter(item => id.includes(item.id)).sort());
    
  }

  const handleTypeFilter = (inputType) => {
    setSelectedType(inputType);
  
  }

  return (
    <div>
      <SearchBar handleOnAlphabet={handleOnAlphabet} handlePriceFilter={handlePriceFilter} handleTypeFilter={handleTypeFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer list={list} handleClick={handleClick} handleDeleteClick={handleDeleteClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={portfolioList} handleDeleteClick={handleDeleteClick} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
