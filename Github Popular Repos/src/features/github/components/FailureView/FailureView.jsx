const FailureView = ({ error }) => {
  return (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-view-img"
      />
      <h1 className="failure-view-title">{error}</h1>
    </div>
  );
};

export default FailureView;
