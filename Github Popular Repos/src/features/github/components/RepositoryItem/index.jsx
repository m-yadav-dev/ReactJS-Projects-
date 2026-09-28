import "./index.css";

const RepositoryItem = (props) => {
  const { githubRepositoryData } = props;
  const { name, avatarUrl, starsCount, forksCount, issuesCount } =
    githubRepositoryData;
  return (
    <>
      <li className="repo-card">
        <img src={avatarUrl} alt={name} className="repo-avatar" />
        <h1 className="repo-name">{name}</h1>
        <div className="repo-stats-container">
          <div className="stat-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
              alt="stars"
              className="stat-icon"
            />
            <p className="stat-text">{starsCount} stars</p>
          </div>

          {/* Forks */}
          <div className="stat-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
              alt="forks"
              className="stat-icon"
            />
            <p className="stat-text">{forksCount} forks</p>
          </div>

          {/* Issues */}
          <div className="stat-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
              alt="open issues"
              className="stat-icon"
            />
            <p className="stat-text">{issuesCount} open issues</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default RepositoryItem;
