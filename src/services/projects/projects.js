export function getProjects() {
  const axios = window.axios;
  return axios.get("../services/projects/projects.json").then((response) => {
    return response.data.data;
  });
}
