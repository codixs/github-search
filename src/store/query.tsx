import React, { useState, createContext } from "react";
import RepoItemModel from "../models/repoItem";
import UserItemModel from "../models/userItem";
import API from "../utils/API";

interface MyContextIF {
  query: string;
  updateQuery: (query: string) => void;
  cleanTotal: () => void;
  total: number;
  result: any[];
  updateResult: (q: string) => void;
}
export const Context = createContext<MyContextIF>({
  query: "",
  updateQuery: () => {},
  cleanTotal: () => {},
  total: 0,
  result: [],
  updateResult: () => {},
});

const MyContextProvider: React.FC = (props) => {
  const [query, setQuery] = useState<string>("elpassion");
  const [total, setTotal] = useState<number>(0);
  const [result, setResult] = useState<any[]>([]);

  const updateQuery = (query: string) => {
    setQuery(query);
  };

  const updateResult = (q: string): any => {
    // call API for users
    API.getUsers(q)
      .then((users) => {
        // change total number
        console.log(`number of users for ${query}: ${users.total_count}`);

        setTotal((prevState) => {
          return prevState + users.total_count;
        });
        // create new user items
        users["items"].map((item: any) => {
          let newUser = new UserItemModel(item.id, item.avatar_url, item.login);
          setResult((prevState) => {
            return prevState.concat(newUser);
          });
        });
      })
      .then(() => {
        API.getRepos(q).then((repos) => {
          // change total number
          console.log(`number of repos for ${query}: ${repos.total_count}`);

          setTotal((prevState) => {
            return prevState + repos.total_count;
          });
          repos["items"].map((item: any) => {
            const newRepo = new RepoItemModel(
              item.id,
              item.full_name,
              item.description,
              item.stargazers_count,
              item.language,
              item.updated_at
            );
            setResult((prevState) => {
              return prevState.concat(newRepo);
            });
          });
        });
      })
      .catch((err) => console.log("error message:", err));
  };

  const cleanTotal = () => {
    setTotal(0);
    setResult([]);
  };

  return (
    <Context.Provider
      value={{
        query,
        updateQuery,
        cleanTotal,
        total,
        result,
        updateResult,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default MyContextProvider;
