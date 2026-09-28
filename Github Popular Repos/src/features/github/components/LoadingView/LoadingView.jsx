
import { ThreeDots } from "react-loader-spinner";
import "./index.css";
const LoadingView = () => {
  return (
    <div className="loader-container" data-testid="loader">
      <ThreeDots
        height="120"
        width="120"
        color="#0284c7"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default LoadingView;
