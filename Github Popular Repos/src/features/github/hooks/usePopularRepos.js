import { useQuery } from "@tanstack/react-query";
import { getPopularRepos } from "../api/getPopularRepos";
import { keepPreviousData } from "@tanstack/react-query";
import { queryKeys } from "./queryKeys";


export const usePopularRepos =  (language) => {
    return useQuery({
        queryKey: queryKeys.list(language), // This generates a unique key for the popular repos query based on the selected language, ensuring that the query is cached and managed correctly by React Query.
        queryFn: () => getPopularRepos(language), // This function fetches the popular repositories based on the selected language.
        enabled: Boolean(language), // This option ensures that the query is only executed when a valid language is provided, preventing unnecessary API calls when the language is not selected.
        placeholderData: keepPreviousData, // This option allows the query to keep the previous data while fetching new data, preventing a loading state when switching languages.
    })
}