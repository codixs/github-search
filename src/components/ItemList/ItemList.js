import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./ItemList.module.css";

let query = " ";
const baseUrl = `https://api.github.com`;
const userUrl = `/search/users?q=${query}`;
const repoUrl = `/search/repositories?q=${query}`;

const ItemList = () => {
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await axios.get(`${baseUrl}${userUrl}`);
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    async function getRepos() {
      try {
        const res = await axios.get(`${baseUrl}${repoUrl}`);
        setRepos(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
    getRepos();
  }, []);
  let total = repos.total_count + users.total_count;
  return (
    <>
      <div className={classes.total}>
        {total === 0 ? "no" : total} {total <= 1 ? "result" : "results"}
      </div>
      <div>test</div>
    </>
  );
};

export default ItemList;
