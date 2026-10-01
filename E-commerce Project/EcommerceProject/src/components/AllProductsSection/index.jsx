import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import BeatLoader from 'react-spinners/BeatLoader'
import ProductCard from "../ProductCard";
import "./index.css"

const AllProductsSection = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllProductsData = async () => {
      const apiUrl = "https://apis.ccbp.in/products";
      const jwtToken = Cookies.get("jwt_token");
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };

      const fetchedData = await fetch(apiUrl, options);
      const fetchedJsonData = await fetchedData.json();
      const { products } = fetchedJsonData;
      const formattedData = products.map((eachProduct) => ({
        title: eachProduct.title,
        brand: eachProduct.brand,
        id: eachProduct.id,
        imageUrl: eachProduct.image_url,
        price: eachProduct.price,
        rating: eachProduct.rating,
      }));

      setProductsData(formattedData);
      setIsLoading(false);
    };

    getAllProductsData();
  });

  const renderProductsList = () => {
    return (
      <div className="product-list-container">
        <h1 className="products-list-heading">All Products</h1>
        <ul className="products-list">
          {productsData.map((product) => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    );
  };

  const renderLoader = () => {
    <div className="loading-container">
      <BeatLoader color="#7032a5" />
    </div>;
  };

  return <>{isLoading ? renderLoader() : renderProductsList()}</>;
};

export default AllProductsSection;
