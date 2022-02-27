import React, { useState, useEffect } from "react";
import classes from "./SearchField.module.css";

const SearchField: React.FC<{ onChangeQuery: (query: string) => void }> = (
  props
) => {
  const [searchTerm, setSearchTerm] = useState("ELPASSION");

  // delay in passing the query to HOC
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onChangeHandler(searchTerm);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  //pass the query to HOC
  const onChangeHandler = (query: string) => {
    props.onChangeQuery(query);
  };

  return (
    <input
      type="text"
      placeholder="Search"
      className={classes.input}
      // value={props.query}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchField;
