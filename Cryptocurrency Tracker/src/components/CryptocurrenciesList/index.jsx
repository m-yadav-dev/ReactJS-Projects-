import "./index.css";
import CryptoCurrencyItem from "../CryptocurrencyItem";
const CryptocurrenciesList = (props) => {
  const { cryptoDataList } = props;
  return (
    <div className="container">
      <div className="cryptocurrencyContainer">
        <h1 className="title">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          className="cryptocurrencyImage"
          alt="cryptocurrency"
        />
      </div>
      <div className="crypto-data-table">
        <div className="table-head table-data">
          <div className="coin-type">
            <p>Coin Type</p>
          </div>
          <div className="coin-type right-table">
            <p>USD</p>
            <p>EURO</p>
          </div>
        </div>
        <ul>
          {cryptoDataList.map((eachData) => (
            <CryptoCurrencyItem
              cryptocurrencyDetails={eachData}
              key={eachData.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CryptocurrenciesList;
