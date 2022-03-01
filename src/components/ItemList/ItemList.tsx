import React, { useState, useEffect } from "react";

import axios from "axios";
import classes from "./ItemList.module.css";
import UserItem from "../UserItem/UserItem";
import RepoItem from "../RepoItem/RepoItem";
import RepoItemModel from "../../models/repoItem";
import UserItemModel from "../../models/userItem";

const baseUrl: string = `https://api.github.com`;
const userUrl: string = `/search/users?q=`;
const repoUrl: string = `/search/repositories?q=`;
const { REACT_APP_GITHUB_TOKEN } = process.env;
const ItemList: React.FC<{
  q: string;
}> = (props) => {
  const [users, setUsers] = useState<UserItemModel[]>([]);
  const [repos, setRepos] = useState<RepoItemModel[]>([]);
  const [total, setTotal] = useState<number>(0);

  async function getUsers(base: string, url: string, query: string) {
    try {
      const res = await axios.get(`${base}${url}${query}`, {
        headers: {
          authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
        },
      });
      setTotal((prevState) => {
        return prevState + res.data.total_count;
      });
      console.log(`USER NO: ${res.data.total_count}`);
      res.data["items"].map((item: any) => {
        const newUser = new UserItemModel(item.id, item.avatar_url, item.login);
        setUsers((prevState) => {
          return prevState.concat(newUser);
        });
      });
    } catch (err) {
      console.log(`Retrieving data failed`, `${err} error`);
    }
  }
  async function getRepos(base: string, url: string, query: string) {
    try {
      const res = await axios.get(`${base}${url}${query}`, {
        headers: {
          authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
        },
      });
      setTotal((prevState) => {
        return prevState + res.data.total_count;
      });
      console.log(`REPO NO: ${res.data.total_count}`);

      res.data["items"].map((item: any) => {
        const newRepo = new RepoItemModel(
          item.id,
          item.full_name,
          item.description,
          item.stargazers_count,
          item.language,
          // item.license || [];
          item.updated_at
        );
        setRepos((prevState) => {
          return prevState.concat(newRepo);
        });
      });
    } catch (err) {
      console.log(`Retrieving data failed`, `${err} error`);
    }
  }

  useEffect(() => {
    setRepos([]);
    setUsers([]);
    setTotal(0);

    let query: string = props.q;
    if (query === "") {
      query = "elpassion";
    }
    getUsers(baseUrl, userUrl, query);
    getRepos(baseUrl, repoUrl, query);
  }, [props.q]);

  let result: any[] = [...repos, ...users];
  result = result.sort((a: any, b: any) => {
    return parseFloat(a.id) - parseFloat(b.id);
  });

  return (
    <div>
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
                key={item.id * index}
                id={item.id}
                avatar={item.avatar}
                login={item.login}
              />
            );
          } else {
            return (
              <RepoItem
                key={item.id * index}
                id={item.id}
                name={item.name}
                description={item.description}
                stars={item.stars}
                language={item.language}
                updatedDate={item.updated_at}
                // license={licenseName}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ItemList;
