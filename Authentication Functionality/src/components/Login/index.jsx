import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();

  
  const handleSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    navigate("/", { replace: true });
  };

  const onClickLoggedIn = async () => {
    try {
      const api = "https://apis.ccbp.in/login";
      const userData = { username: "rahul", password: "rahul@2021" };
      const options = {
        method: "POST",
        body: JSON.stringify(userData),
      };

      const response = await fetch(api, options);
      const data = await response.json();

      if (response.ok) {
        handleSuccess(data.jwt_token);
      }
    } catch (error) {
      console.log("Error fetching login API:", error.message);
    }
  };
  return (
    <>
      <div className="login-content">
        <h1 className="title"> Please Login </h1>
        <button className="login-btn" onClick={onClickLoggedIn}>
          Login with Sample Credits
        </button>
      </div>
    </>
  );
};

export default Login;
