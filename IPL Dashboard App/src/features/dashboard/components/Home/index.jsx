import "./index.css";
import TeamCard from "../TeamCard";
import { useIplTeams } from "../../hooks/useIplTeams";
import Loader from "../Loader/Loader";
const Home = () => {
  const { data: teamsData, loading, isLoading } = useIplTeams();

  return (
    <div className="bg">
      {isLoading ? (
        <Loader loading={loading} />
      ) : (
        <div className="ipl-dashboard-container">
          <div className="ipl-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo"
            />
            <h1 className="ipl-heading">IPL Dashboard</h1>
          </div>
          <div className="ipl-dashboard-card-list">
            <ul>
              {teamsData?.map((eachData) => (
                <TeamCard eachData={eachData} key={eachData.id} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
