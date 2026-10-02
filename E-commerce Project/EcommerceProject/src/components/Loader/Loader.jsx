import { ThreeDots } from "react-loader-spinner";

const Loader = () => (
  <div className="h-screen flex justify-center items-center w-full">
    <ThreeDots
      height="100"
      width="100"
      radius="9"
      color="#7032a5"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </div>
);

export default Loader;
