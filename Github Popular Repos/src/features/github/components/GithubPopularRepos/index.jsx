import LanguageFilterItem from "../LanguageFilterItem";
import RepositoryItem from "../RepositoryItem";
import "./index.css";
import { useSearchParams } from "react-router-dom";
import { usePopularRepos } from "../../hooks/usePopularRepos";
import LoadingView from "../LoadingView/LoadingView";
import FailureView from "../FailureView/FailureView";

const languageFiltersData = [
  { id: "ALL", language: "All" },
  { id: "JAVASCRIPT", language: "Javascript" },
  { id: "RUBY", language: "Ruby" },
  { id: "JAVA", language: "Java" },
  { id: "CSS", language: "CSS" },
];

// const popularReposData = [
//   {
//     id: 1,
//     name: "freeCodeCamp",
//     avatar_url: "https://avatars.githubusercontent.com/u/9892522?v=4",
//     stars_count: 35678,
//     forks_count: 2234,
//     issues_count: 122,
//   },
//   {
//     id: 2,
//     name: "996.ICU",
//     avatar_url: "https://avatars.githubusercontent.com/u/45790596?v=4",
//     stars_count: 25678,
//     forks_count: 1234,
//     issues_count: 100,
//   },
//   {
//     id: 3,
//     name: "vue",
//     avatar_url: "https://avatars.githubusercontent.com/u/6128107?v=4",
//     stars_count: 15678,
//     forks_count: 987,
//     issues_count: 50,
//   },
//   {
//     id: 4,
//     name: "facebook/react",
//     avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
//     stars_count: 45678,
//     forks_count: 5234,
//     issues_count: 322,
//   },
//   {
//     id: 5,
//     name: "tensorflow",
//     avatar_url: "https://avatars.githubusercontent.com/u/15658638?v=4",
//     stars_count: 20000,
//     forks_count: 1500,
//     issues_count: 80,
//   },
//   {
//     id: 6,
//     name: "bootstrap",
//     avatar_url: "https://avatars.githubusercontent.com/u/2918581?v=4",
//     stars_count: 22000,
//     forks_count: 1100,
//     issues_count: 90,
//   },
// ];

const GithubPopularRepos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const languageFromQuery = searchParams.get("language") || "ALL";

  const {
    data: reposData,
    isPending,
    isError,
    error: errorMessage,
  } = usePopularRepos(languageFromQuery);
  const handleTabClick = (newLanguage) => {
    setSearchParams({ language: newLanguage });
  };

  if (isPending) return <LoadingView />;
  if (isError)
    return <FailureView error={errorMessage?.message || "Something went wrong"} />;

  const renderPopularRepos = () => {
    return (
      <>
        <ul className="repos-list">
          {reposData?.map((eachRepo) => (
            <RepositoryItem githubRepositoryData={eachRepo} key={eachRepo.id} />
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <div className="app-container">
        <h1 className="main-heading">Popular</h1>
        <ul className="filters-list">
          {languageFiltersData.map((language) => (
            <LanguageFilterItem
              key={language.id}
              programmingLanguage={language}
              tabMenuUpdater={handleTabClick}
              isActive={language.id === languageFromQuery}
            />
          ))}
        </ul>
        {renderPopularRepos()}
      </div>
    </>
  );
};

export default GithubPopularRepos;
