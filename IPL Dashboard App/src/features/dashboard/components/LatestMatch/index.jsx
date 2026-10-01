import "./index.css";

const LatestMatch = (props) => {
  const { latestMatchDetails = {} } = props;
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails || {};
  console.log("LatestMatch Props:", props);
  return (
    <div className="latest-match-container">
      <div className="latest-match-card">
        {/* Left Section */}
        <div className="match-info-left">
          <p className="team-name">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="match-venue">{venue}</p>
          <p className="match-result">{result}</p>
        </div>

        {/* Center Section */}
        <div className="match-logo-container">
          <img
            src={competingTeamLogo}
            alt={competingTeam}
            className="team-logo-img"
          />
        </div>

        {/* Right Section */}
        <div className="match-info-right">
          <div className="detail-item">
            <p className="detail-label">First Innings</p>
            <p className="detail-value">{firstInnings}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">Second Innings</p>
            <p className="detail-value">{secondInnings}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">Man Of The Match</p>
            <p className="detail-value">{manOfTheMatch}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">Umpires</p>
            <p className="detail-value">{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestMatch;
