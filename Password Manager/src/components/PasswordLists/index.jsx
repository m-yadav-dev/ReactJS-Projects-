import "./index.css";

const PasswordLists = (props) => {
  const { passwordDetails, onDeletePassword, isChecked } = props;
  const {
    id,
    websiteInput,
    usernameInput,
    passwordInput,
    initialClassName,
  } = passwordDetails;

  const onDeletePasswordDetails = () => {
    onDeletePassword(id);
  };

  const passwordVisibilityToggle = isChecked ? (
    <p className="password-value">{passwordInput}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-image"
    />
  );

  console.log(passwordVisibilityToggle);
  return (
    <li className="password-item">
      <div className={`initial-container ${initialClassName}`}>
        {websiteInput.slice(0, 1).toUpperCase()}
      </div>

      <div className="content-container">
        <p className="website-text">{websiteInput}</p>
        <p className="username-text">{usernameInput}</p>
        {/* Masked Password Image */}
        {passwordVisibilityToggle}
      </div>

      <button
        type="button"
        className="delete-btn"
        onClick={onDeletePasswordDetails}
         data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  );
};

export default PasswordLists;
