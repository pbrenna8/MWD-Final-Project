// service that imports the json data for the navigation bar
export function getOptions() {
  const axios = window.axios;
  return axios.get("../services/options/options.json").then((response) => {
    return response.data.data;
  });
}
