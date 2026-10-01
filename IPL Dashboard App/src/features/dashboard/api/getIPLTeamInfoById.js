import axios from "axios";

export const getIPLTeamInfoById = async (id) => {
  const response = await axios.get(`https://apis.ccbp.in/ipl/${id}`);
  console.log("API Response:", response);
  const parsedTeamResponse = response.data;
  console.log("Parsed Team Response:", parsedTeamResponse);
  const formattedTeamData = {
    teamBannerUrl: parsedTeamResponse.team_banner_url,
    latestMatchDetails: {
      id: parsedTeamResponse.latest_match_details.id,
      competingTeam: parsedTeamResponse.latest_match_details.competing_team,
      competingTeamLogo:
        parsedTeamResponse.latest_match_details.competing_team_logo,
      date: parsedTeamResponse.latest_match_details.date,
      firstInnings: parsedTeamResponse.latest_match_details.first_innings,
      secondInnings: parsedTeamResponse.latest_match_details.second_innings,
      manOfTheMatch: parsedTeamResponse.latest_match_details.man_of_the_match,
      result: parsedTeamResponse.latest_match_details.result,
      umpires: parsedTeamResponse.latest_match_details.umpires,
      venue: parsedTeamResponse.latest_match_details.venue,
      matchStatus: parsedTeamResponse.latest_match_details.match_status,
    },
    recentMatches: parsedTeamResponse.recent_matches.map((match) => ({
      id: match.id,
      competingTeam: match.competing_team,
      competingTeamLogo: match.competing_team_logo,
      date: match.date,
      firstInnings: match.first_innings,
      secondInnings: match.second_innings,
      manOfTheMatch: match.man_of_the_match,
      result: match.result,
      umpires: match.umpires,
      venue: match.venue,
      matchStatus: match.match_status,
    })),
  };
  console.log("Formatted Team Data:", formattedTeamData.recentMatches);
  return formattedTeamData;
};
