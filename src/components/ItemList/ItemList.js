import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./ItemList.module.css";
import UserItem from "../UserItem/UserItem";

let query = `michal`;
const baseUrl = `https://api.github.com`;
const userUrl = `/search/users?q=${query}`;
const repoUrl = `/search/repositories?q=${query}`;
const access_token = "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";

const ItemList = () => {
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);

  async function getUsers(base, url) {
    try {
      const res = await axios.get(`${base}${url}`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      });
      setUsers(res.data);
    } catch (err) {
      console.log("error", err);
    }
  }

  async function getRepos(base, url) {
    try {
      const res = await axios.get(`${base}${url}`);
      setRepos(res.data);
    } catch (err) {
      console.log("error", err);
    }
  }

  useEffect(() => {
    getUsers(baseUrl, userUrl);
    getRepos(baseUrl, repoUrl);
  }, []);

  let total = users.total_count + repos.total_count;
  let userList = { ...users.items };
  let repoList = { ...repos.items };

  return (
    <>
      <div>users: {users.total_count}</div>
      <div>repos: {repos.total_count}</div>
      <div className={classes.total}>
        {total === 0 ? "no" : total} {total <= 1 ? "result" : "results"}
      </div>
      <div className={classes.listing}>
        {Object.values(userList).map((item) => {
          return (
            <UserItem
              key={item.id}
              id={item.id}
              avatar={item.avatar_url}
              login={item.login}
            />
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
