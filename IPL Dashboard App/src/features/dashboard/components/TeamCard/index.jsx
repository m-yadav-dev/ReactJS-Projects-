import "./index.css";
import { NavLink } from "react-router-dom";
const TeamCard = (props) => {
  const { eachData } = props;
  const { id, name, teamImageUrl } = eachData;
  return (
    <NavLink to={`/team-matches/${id}`}>
      <li>
        <div className="ipl-team-card">
          <img className="team-logo" src={teamImageUrl} alt={name} />
          <h3 className="home-team-name">{name}</h3>
        </div>
      </li>
    </NavLink>
  );
};

export default TeamCard;
