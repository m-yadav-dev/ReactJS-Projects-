import CryptocurrenciesList from "../CryptocurrenciesList";
import { TailSpin } from "react-loader-spinner";
import { Component } from "react";
import "./index.css";
class CryptocurrencyTracker extends Component {
  state = {
    cryptoData: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchCryptoData();
  }

  fetchCryptoData = async () => {
    try {
      const response = await fetch(
        "https://apis.ccbp.in/crypto-currency-converter"
      );
      const data = await response.json();

      const camelCaseData = data.map((eachCrypto) => ({
        currencyName: eachCrypto.currency_name,
        usdValue: eachCrypto.usd_value,
        euroValue: eachCrypto.euro_value,
        id: eachCrypto.id,
        currencyLogo: eachCrypto.currency_logo,
      }));

      this.setState({ cryptoData: camelCaseData, isLoading: false });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { cryptoData, isLoading } = this.state;
    return (
      <div className="bg">
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <TailSpin
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              visible={isLoading}
            />
          </div>
        ) : (
          <CryptocurrenciesList cryptoDataList={cryptoData} />
        )}
      </div>
    );
  }
}

export default CryptocurrencyTracker;
