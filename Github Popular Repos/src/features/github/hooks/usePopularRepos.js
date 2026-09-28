import { useQuery } from "@tanstack/react-query";
import { getPopularRepos } from "../api/getPopularRepos";
import { keepPreviousData } from "@tanstack/react-query";
import { queryKeys } from "./queryKeys";


export const usePopularRepos =  (language) => {
    return useQuery({
        queryKey: queryKeys.list(language),
        queryFn: () => getPopularRepos(language),
        enabled: Boolean(language),
        placeholderData: keepPreviousData,
    })
}