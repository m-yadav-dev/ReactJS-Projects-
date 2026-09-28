import { useState } from "react";
import AppItem from "../AppItem";
import TabItem from "../TabItem";
import "./index.css";

const tabsList = [
  { tabId: "SOCIAL", displayText: "Social" },
  { tabId: "GAMES", displayText: "Games" },
  { tabId: "NEWS", displayText: "News" },
  { tabId: "FOOD", displayText: "Food" },
];

const AppStore = ({ appsList }) => {
  const [activeTab, setActiveTab] = useState(tabsList[0].tabId);
  const [searchInput, setSearchInput] = useState("");
  const [filteredApps, _] = useState(appsList);

  const updateActiveTab = (tabId) => {
    console.log(tabId);
    setActiveTab(tabId);
  };

  const onChangeSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  // const filteredList = filteredApps.filter((app) => {
  //   const appName = app.appName.toLowerCase();
  //   const searchText = searchInput.toLowerCase();
  //   return appName.includes(searchText) && app.category === activeTab;
  // })

  const filteredList = filteredApps.filter((app) => {
    const appName = app.appName.toLowerCase();
    const searchText = searchInput.toLowerCase();
    const isSearchMatch =
      appName.includes(searchText) && app.category === activeTab;
    return isSearchMatch;
  });

  return (
    <div className="app-store-background">
      <div className="app-store-wrapper">
        <h1 className="app-store-heading">App Store</h1>
        <div className="search-input-container">
          <input
            type="search"
            placeholder="Search"
            onChange={onChangeSearchInput}
            className="app-store-search-input"
          />
          <button type="submit" className="app-store-search-button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
              alt="search icon"
              className="app-store-search-icon"
            />
          </button>
        </div>

        <ul className="app-store-tabs-list">
          {tabsList.map((eachTab) => (
            <TabItem
              key={eachTab.tabId}
              tabDetails={eachTab}
              updateActiveTab={updateActiveTab}
              isActive={activeTab === eachTab.tabId}
            />
          ))}
        </ul>
        <div>
          <ul className="app-store-apps-list">
            {filteredList.length > 0 ? (
              filteredList.map((eachApp) => (
                <AppItem key={eachApp.id} app={eachApp} />
              ))
            ) : (
              <p className="no-results-text">No apps found</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
