import { useState } from "react";

import "./index.css";

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: "07:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/instagram-img.png",
    title: "Instagram",
    domainUrl: "instagram.com",
  },
  {
    id: 1,
    timeAccessed: "05:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/twitter-img.png",
    title: "Twitter. It’s what’s happening / Twitter",
    domainUrl: "twitter.com",
  },
  {
    id: 2,
    timeAccessed: "04:35 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/facebook-img.png",
    title: "Facebook – log in or sign up",
    domainUrl: "facebook.com",
  },
  {
    id: 3,
    timeAccessed: "04:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/linkedin-img.png",
    title: "LinkedIn: Log In or Sign Up",
    domainUrl: "linkedin.com",
  },
  {
    id: 4,
    timeAccessed: "04:00 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/hashnode-img.png",
    title: "Hashnode: Everything you need to start blogging as a developer!",
    domainUrl: "hashnode.com",
  },
  {
    id: 5,
    timeAccessed: "03:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/github-img.png",
    title: "GitHub: Where the world builds software · GitHub",
    domainUrl: "github.com",
  },

  {
    id: 6,
    timeAccessed: "02:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/react-img.png",
    title: "React – A JavaScript library for building user interfaces",
    domainUrl: "reactjs.org",
  },
  {
    id: 7,
    timeAccessed: "01:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png",
    title: "Stack Overflow - Where Developers Learn, Share, & Build Careers",
    domainUrl: "stackoverflow.com",
  },

  {
    id: 8,
    timeAccessed: "09:25 AM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/gmail-img.png",
    title: "Gmail",
    domainUrl: "mail.google.com",
  },
  {
    id: 9,
    timeAccessed: "09:00 AM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/google-img.png",
    title: "Google",
    domainUrl: "google.com",
  },
];

const BrowserHistory = () => {
  const [input, setInput] = useState("");
  const [initialData, setInitialData] = useState(initialHistoryList);

  const onChangeHistoryItemInput = (event) => {
    setInput(event.target.value);
  };

  const filterHistoryData = initialData.filter((eachData) =>
    eachData.title.toLocaleLowerCase().includes(input.toLocaleLowerCase()),
  );

  const onClickDeleteListItem = (id) => {
    setInitialData((prevData) =>
      prevData.filter((eachData) => eachData.id !== id),
    );
  };

  return (
    <div className="bg">
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
            className="nav-logo-img"
          />
        </div>
        <div className="input-wrapper">
          <div className="search-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt=""
                search
                className="search-icon"
              />
            </div>
            <div className="input-box">
              <input
                value={input}
                onChange={onChangeHistoryItemInput}
                placeholder="Search history"
                className="search-input"
                type="search"
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="history-container">
        {filterHistoryData.length === 0 ? (
          <div className="no-history-container">
            <p className="no-history">There is no history to show</p>
          </div>
        ) : (
          <ul className="search-history-container">
            {filterHistoryData.map((eachItem) => (
              <li key={eachItem.id}>
                <p className="time">{eachItem.timeAccessed}</p>
                <div className="history-list-item">
                  <div className="logo-and-title-container">
                    <img
                      className="logo-img"
                      src={eachItem.logoUrl}
                      alt="domain logo"
                    />
                    <h1 className="title">
                      {eachItem.title}{" "}
                      <span className="domain-name">{eachItem.domainUrl}</span>
                    </h1>
                  </div>
                  <div className="history-delete-icon-container">
                    <button
                      className="list-delete-btn"
                      data-testid="delete"
                      onClick={() => onClickDeleteListItem(eachItem.id)}
                    >
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                        alt="delete"
                        className="delete-icon"
                      />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BrowserHistory;
