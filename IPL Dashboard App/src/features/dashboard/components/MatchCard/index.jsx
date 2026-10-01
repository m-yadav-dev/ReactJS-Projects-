import "./index.css";

const MatchCard = (props) => {
  const { matchCardDetails } = props;
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = matchCardDetails;

  const matchStatusClass = matchStatus === "Won" ? "won" : "lost";
  return (
    <li className="recent-match-card-list">
      <div className="team-stats">
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="recent-match-image"
        />
        <p className="competing-team">{competingTeam}</p>
      </div>
      <div>
        <p className="match-result">{result}</p>

        <p className={`match-status ${matchStatusClass}`}>{matchStatus}</p>
      </div>
    </li>
  );
};

export default MatchCard;
