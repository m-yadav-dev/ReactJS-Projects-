export const queryKeys = {
  all: ["popularRepos"], // Unique key for the popular repos query
  list: (language) => [...queryKeys.all, { language }], // Function to generate a unique key for the popular repos query based on the selected language
};
