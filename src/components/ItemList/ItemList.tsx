import React, { useContext } from "react";

import classes from "./ItemList.module.css";
import UserItem from "../UserItem/UserItem";
import RepoItem from "../RepoItem/RepoItem";
import { Context } from "../../store/query";

const ItemList: React.FC = () => {
  const { total, result } = useContext(Context);
  result.sort((a: any, b: any) => {
    return a.id - b.id;
  });
  return (
    <div>
      <div className={classes.total}>
        {total === 0 ? "no" : total}
        {total <= 1 ? " result" : " results"}
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
                avatar_url={item.avatar_url}
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
                updated_at={item.updated_at}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ItemList;
