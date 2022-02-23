import React, { useState, useEffect } from "react";
import toastr from "toastr";

import axios from "axios";
import classes from "./ItemList.module.css";
import UserItem from "../UserItem/UserItem";
import RepoItem from "../RepoItem/RepoItem";

const baseUrl = `https://api.github.com`;
const userUrl = `/search/users?q=`;
const repoUrl = `/search/repositories?q=`;
const { REACT_APP_GITHUB_TOKEN } = process.env;

const ItemList = (props) => {
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  async function getUsers(base, url, query) {
    try {
      const res = await axios.get(`${base}${url}${query}`, {
        headers: {
          authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
        },
      });
      setUsers(res.data);
    } catch (err) {
      console.log(`Retrieving data failed`, `${err} error`);
      toastr.error(`Retrieving data failed`, `${err} error`);
    }
  }
  async function getRepos(base, url, query) {
    try {
      const res = await axios.get(`${base}${url}${query}`, {
        headers: {
          authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
        },
      });
      setRepos(res.data);
    } catch (err) {
      console.log(`Retrieving data failed`, `${err} error`);
      toastr.error(`Retrieving data failed`, `${err} error`);
    }
  }

  useEffect(() => {
    getUsers(baseUrl, userUrl, props.query);
    getRepos(baseUrl, repoUrl, props.query);
  }, []);

  useEffect(() => {
    let query = props.query;
    if (query === "") {
      query = "elpassion";
    }
    getUsers(baseUrl, userUrl, query);
    getRepos(baseUrl, repoUrl, query);
  }, [props.query]);

  let total = users.total_count + repos.total_count;

  let userList = Object.values({ ...users.items });
  let repoList = Object.values({ ...repos.items });

  let result = [...userList, ...repoList];
  result = result.sort(function (a, b) {
    return parseFloat(a.id) - parseFloat(b.id);
  });

  return (
    <React.Fragment>
      <div className={classes.total}>
        {total === 0 ? "no" : total} {total <= 1 ? "result" : "results"}
      </div>
      <div className={classes.listing}>
        {result.map((item, index) => {
          // reduce the size of search results
          if (index > 9) {
            return;
          }
          if (item.login) {
            return (
              <UserItem
                key={item.id}
                id={item.id}
                avatar={item.avatar_url}
                login={item.login}
              />
            );
          } else {
            let licenseName;
            if (item.license) {
              licenseName = item.license["name"];
            }
            return (
              <RepoItem
                key={item.id}
                id={item.id}
                name={item.full_name}
                description={item.description}
                stars={item.stargazers_count}
                language={item.language}
                updatedDate={item.updated_at}
                license={licenseName}
              />
            );
          }
        })}
      </div>
    </React.Fragment>
  );
};

export default ItemList;
