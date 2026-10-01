import { TailSpin, ThreeDots } from "react-loader-spinner";

const Loader = ({ loading }) => {
  return (
    <div className="loader-container">
      <ThreeDots
        height="120"
        width="120"
        color="#ffcdca"
        ariaLabel="three-dots-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={loading}
      />
    </div>
  );
};

export default Loader;
