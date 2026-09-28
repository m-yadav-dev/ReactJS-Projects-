import './index.css'
const TabItem = ({ tabDetails, updateActiveTab, isActive }) => {
  const { displayText } = tabDetails;
  return (
    <li className="app-store-tab-item">
      <button
        type="button"
        className={`app-store-tab-button ${isActive ? "active" : ""}`}
        onClick={() => updateActiveTab(tabDetails.tabId)}
      >
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
