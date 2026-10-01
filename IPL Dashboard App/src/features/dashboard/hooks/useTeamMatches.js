import { useQuery } from "@tanstack/react-query";
import { getIPLTeamInfoById } from "../api/getIPLTeamInfoById";

export const useIplTeamsMatches = (id) => {
  return useQuery({
    queryKey: ["iplTeamInfo", id], // Query key for caching and refetching
    queryFn: ({ queryKey }) => getIPLTeamInfoById(queryKey[1]), // Fetch function to get IPL team info by ID
    enabled: !!id, // Enable the query only when id is provided
  });
};
