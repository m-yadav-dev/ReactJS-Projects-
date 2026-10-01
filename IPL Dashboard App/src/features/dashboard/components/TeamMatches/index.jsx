// import axios from "axios";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import "./index.css";
import LatestMatch from "../LatestMatch";
import MatchCard from "../MatchCard";
import { useIplTeamsMatches } from "../../hooks/useTeamMatches";
import Loader from "../Loader/Loader";
const TeamMatches = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useIplTeamsMatches(id);
  console.log({ data, isLoading, isError });
  const { teamBannerUrl, latestMatchDetails, recentMatches } = data || {};
  return (
    <div className="background">
      {isLoading ? (
        <Loader loading={true} />
      ) : (
        <>
          <div className="container">
            <div className="ipl-team-poster">
              <img src={teamBannerUrl} className="team-banner" alt="" />
            </div>
            <div>
              <p className="latest-match">Latest Matches</p>
              {latestMatchDetails ? (
                <LatestMatch latestMatchDetails={latestMatchDetails} />
              ) : (
                <Loader loading={true} />
              )}
            </div>
          </div>
          <div className="recent-match-card-container">
            <ul>
              {recentMatches?.map((eachData) => (
                <MatchCard matchCardDetails={eachData} key={eachData.id} />
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default TeamMatches;
