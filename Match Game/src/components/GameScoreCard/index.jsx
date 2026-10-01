import "./index.css";

const GameScoreCard = (props) => {
  const { gameScore, resetGame } = props;

  const resetGameMethod = () => {
    resetGame();
  };

  return (
    <>
      <div className="game-score-card">
        <div className="trophy-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="trophy-image"
          />
        </div>
        <p className="your-score-title">Your Score</p>
        <span className="game-score">{gameScore}</span>
        <button onClick={resetGameMethod} className="play-again-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="play-again-img"
          />
          Play Again
        </button>
      </div>
    </>
  );
};

export default GameScoreCard;
