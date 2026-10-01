import { useQuery } from "@tanstack/react-query";
import { iplTeamsQueryKey } from "./queryKeys";
import { loadIPLTeams } from "../api/loadIPLTeams";
export const useIplTeams = () => {
  return useQuery({
    queryKey: iplTeamsQueryKey(),
    queryFn: loadIPLTeams,
  });
};
