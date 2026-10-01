import "./index.css";
const CryptoCurrencyItem = (props) => {
  const { cryptocurrencyDetails } = props;
  const { id, currencyName, usdValue, euroValue, currencyLogo } =
    cryptocurrencyDetails;
  return (
    <li className="row-data">
      <div className="left-table-data">
        <img src={currencyLogo} className="bitcoin-img" alt={currencyName} />
        <p className="coin-type">{currencyName}</p>
      </div>

      <div className="right-table-data left-table-data">
        <p className="coin-type">{usdValue}</p>
        <p className="coin-type">{euroValue}</p>
      </div>
    </li>
  );
};

export default CryptoCurrencyItem;
