import axios from "axios";
import Cookies from "js-cookie";

export const getProductsDataApi = async () => {
  const API_URL = "https://apis.ccbp.in/products";
  const jwtToken = Cookies.get("jwt_token");
  const options = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };
  const response = await axios.get(API_URL, options);



  const { products } = response.data;

  const formattedData = products.map((eachProduct) => ({
    id: eachProduct.id,
    title: eachProduct.title,
    brand: eachProduct.brand,
    imageUrl: eachProduct.image_url,
    price: eachProduct.price,
    rating: eachProduct.rating,
  }));

  return formattedData;
};
