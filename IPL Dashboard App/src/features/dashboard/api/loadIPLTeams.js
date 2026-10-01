import axios from "axios";

export const loadIPLTeams = async () => {
  const response = await axios.get("https://apis.ccbp.in/ipl");
  const parsedResponse = response.data;
  const { teams } = parsedResponse;
  const updatedData = teams.map((eachTeamData) => ({
    id: eachTeamData.id,
    name: eachTeamData.name,
    teamImageUrl: eachTeamData.team_image_url,
  }));

  return updatedData;
};
