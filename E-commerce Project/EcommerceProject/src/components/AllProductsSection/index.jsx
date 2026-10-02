import Cookies from "js-cookie";
import BeatLoader from "react-spinners/BeatLoader";
import ProductCard from "../ProductCard";
import "./index.css";
import { useProducts } from "../../features/products/hooks/useProducts";
import Loader from "../Loader/Loader";

const AllProductsSection = () => {
  const { data: productsData, isError, error, isLoading } = useProducts();

  if (isLoading) {
    <Loader />;
  }

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

  if (isError) {
    return <div className="error-container">Error: {error.message}</div>;
  }

  return <>{isLoading ? <Loader /> : renderProductsList()}</>;
};

export default AllProductsSection;
