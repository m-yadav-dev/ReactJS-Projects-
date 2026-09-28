export const getPopularRepos = async (language) => {
  const response = await fetch(
    `https://apis.ccbp.in/popular-repos?language=${language}`,
  );
  if (!response.ok)
    throw new Error("Something went wrong while fetching popular repos");
  const data = await response.json();
  return data.popular_repos.map((repo) => ({
    id: repo.id,
    name: repo.name,
    avatarUrl: repo.avatar_url,
    starsCount: repo.stars_count,
    forksCount: repo.forks_count,
    issuesCount: repo.issues_count,
  }));
};
