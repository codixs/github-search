import axios from "axios";

const { REACT_APP_GITHUB_TOKEN } = process.env;

async function getItems(url: string, query: string) {
  try {
    const data = await axios.get(`${url}${query}`, {
      headers: {
        authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
      },
    });
    return data.data;
  } catch (err) {
    console.log(`Retrieving data failed`, `${err} error`);
  }
}

export default {
  getUsers: (q: string) => {
    return getItems("https://api.github.com/search/users?q=", q);
  },
  getRepos: (q: string) => {
    return getItems("https://api.github.com/search/repositories?q=", q);
  },
};
