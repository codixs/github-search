import React, { useEffect, useContext } from "react";

import classes from "./SearchField.module.css";
import { Context } from "../../store/query";

const SearchField: React.FC = () => {
  const { query, updateQuery, cleanTotal, updateResult } = useContext(Context);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      cleanTotal();
      updateResult(query);
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <input
      type="text"
      placeholder="Search"
      className={classes.input}
      value={query}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        updateQuery(e.target.value);
      }}
    />
  );
};

export default SearchField;
