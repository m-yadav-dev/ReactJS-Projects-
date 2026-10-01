import "./index.css";

const Header = (props) => {
  const { gameScoreValue, currentTimerValue } = props;
  return (
    <nav className="navbar-header">
      <ul className="nav-items">
        <li className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
            alt="website logo"
            className="website-logo"
          />
        </li>
        <li className="score-timer-container">
          <p className="score">
            Score: <span className="score-value">{gameScoreValue}</span>
          </p>
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-logo"
            />
            <p className="timer score-value">{`${currentTimerValue} Sec`}</p>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
