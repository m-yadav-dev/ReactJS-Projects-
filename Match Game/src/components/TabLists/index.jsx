import "./index.css";

const TabLists = (props) => {
  const { tabDetails, updateTab, isActive } = props;
  const { displayText, tabId } = tabDetails;
  const updateHeaderId = () => {
    updateTab(tabId);
  };

  const tabClass = isActive ? "tab-text active" : "tab-text";

  return (
    <li>
      <button className={tabClass} onClick={updateHeaderId}>
        {displayText}
      </button>
    </li>
  );
};

export default TabLists;
