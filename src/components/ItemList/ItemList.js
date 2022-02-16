import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./ItemList.module.css";
import UserItem from "../UserItem/UserItem";

let query = "google";
const baseUrl = `https://api.github.com`;
const userUrl = `/search/users?q=${query}`;
const repoUrl = `/search/repositories?q=${query}`;

const ItemList = () => {
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);

  async function getUsers(base, url) {
    try {
      const res = await axios.get(`${base}${url}`);
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
  console.log("userlist", userList);
  let repoList = { ...repos.items };
  console.log("repoList", repoList);

  return (
    <>
      <div>users: {users.total_count}</div>
      <div>repos: {repos.total_count}</div>
      <div className={classes.total}>
        {total === 0 ? "no" : total} {total <= 1 ? "result" : "results"}
      </div>
      {Object.values(userList).map((item) => {
        return <div key={item.id}>{item.avatar_url}</div>;
      })}
    </>
  );
};

export default ItemList;
