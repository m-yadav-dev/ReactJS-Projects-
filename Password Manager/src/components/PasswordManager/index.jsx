import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PasswordLists from "../PasswordLists";
import "./index.css";

const initialContainerBackgroundClassNames = [
  "amber",
  "blue",
  "orange",
  "emerald",
  "teal",
  "red",
  "light-blue",
];

class PasswordManager extends Component {
  state = {
    passwordData: [],
    websiteInput: "",
    usernameInput: "",
    passwordInput: "",
    searchInput: "",
    isChecked: false,
  };

  onChangeWebsite = (event) => {
    this.setState({ websiteInput: event.target.value });
  };

  onChangeUsername = (event) => {
    this.setState({ usernameInput: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ passwordInput: event.target.value });
  };

  onSubmitPasswordDetails = (event) => {
    event.preventDefault();

    const { websiteInput, usernameInput, passwordInput } = this.state;

    if (websiteInput === "" || usernameInput === "" || passwordInput === "") {
      return;
    }

    const randomIndex = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    );
    const newPasswordData = {
      id: uuidv4(),
      passwordInput,
      usernameInput,
      websiteInput,
      initialClassName: initialContainerBackgroundClassNames[randomIndex],
    };

    this.setState((prevState) => ({
      passwordData: [...prevState.passwordData, newPasswordData],
      websiteInput: "",
      usernameInput: "",
      passwordInput: "",
    }));
  };

  onDeletePassword = (passwordId) => {
    const { passwordData } = this.state;
    const filteredPasswordData = passwordData.filter(
      (eachPassword) => eachPassword.id !== passwordId,
    );
    this.setState({ passwordData: filteredPasswordData });
  };

  onFilterPassword = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  onToggleShowPasswords = () => {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked,
    }));
  };

  onEmptyPasswordsView = () => (
    <div className="no-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />
      <p className="no-passwords-text">No Passwords</p>
    </div>
  );

  render() {
    const {
      passwordData,
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
      isChecked,
    } = this.state;
    const searchResults = passwordData.filter((eachPassword) =>
      eachPassword.websiteInput
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    );

    return (
      <>
        <div className="app-container">
          <div className="main-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
            <div className="sub-div1">
              <form
                className="add-password-container"
                onSubmit={this.onSubmitPasswordDetails}
              >
                <h1 className="form-heading">Add New Password</h1>
                <div className="input-holder">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-icon"
                  />
                  <input
                    type="text"
                    className="input-element"
                    placeholder="Enter Website"
                    value={websiteInput}
                    onChange={this.onChangeWebsite}
                  />
                </div>
                <div className="input-holder">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="input-icon"
                  />
                  <input
                    type="text"
                    className="input-element"
                    placeholder="Enter Username"
                    value={usernameInput}
                    onChange={this.onChangeUsername}
                  />
                </div>
                <div className="input-holder">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="input-icon"
                  />
                  <input
                    type="password"
                    className="input-element"
                    placeholder="Enter Password"
                    value={passwordInput}
                    onChange={this.onChangePassword}
                  />
                </div>
                <button type="submit" className="add-btn">
                  Add
                </button>
              </form>

              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="lg-image"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
                className="sm-image"
              />
            </div>

            <div className="sub-div2">
              <div className="header-search-container">
                <h1 className="your-passwords-heading">
                  Your Passwords
                  <p className="password-count">{passwordData.length}</p>
                </h1>
                <div className="search-input-holder">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="input-icon"
                  />
                  <input
                    type="search"
                    className="input-element"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.onFilterPassword}
                  />
                </div>
              </div>

              <hr
                style={{
                  border: "none",
                  borderBottom: "1px solid #7683cb",
                  marginBottom: "20px",
                }}
              />

              <div className="show-passwords-container">
                <input
                  type="checkbox"
                  id="showPasswords"
                  className="check-box"
                  checked={isChecked}
                  onChange={this.onToggleShowPasswords}
                />
                <label htmlFor="showPasswords" className="show-passwords-label">
                  Show Passwords
                </label>
              </div>

              {searchResults.length === 0 ? (
                this.onEmptyPasswordsView()
              ) : (
                <ul className="passwords-list">
                  {searchResults.map((eachPassword) => (
                    <PasswordLists
                      key={eachPassword.id}
                      passwordDetails={eachPassword}
                      isChecked={isChecked}
                      onDeletePassword={this.onDeletePassword}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PasswordManager;
