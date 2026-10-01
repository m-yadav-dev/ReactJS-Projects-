export const loginApi = async (userDetails) => {
  const API_URL = "https://apis.ccbp.in/login";
  const options = {
    method: "POST",
    body: JSON.stringify(userDetails),
  };

  const response = await fetch(API_URL, options);
  const data = await response.json();

  if (response.ok) {
    return data;
  }
  if (!response.ok) {
    throw new Error(data.error_msg);
  }
};
