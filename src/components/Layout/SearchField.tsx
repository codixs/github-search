import React, { useState, useEffect } from "react";
import classes from "./SearchField.module.css";

const SearchField: React.FC<{
  onChangeQuery: (q: string) => void;
}> = (props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // delay in passing the query to HOC
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onChangeHandler(searchTerm);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  //pass the query to HOC
  const onChangeHandler = (q: string) => {
    props.onChangeQuery(q);
  };

  return (
    <input
      type="text"
      placeholder="Search"
      className={classes.input}
      value={searchTerm}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        console.log(`event: ${e.target.value}`);
        console.log(`searchTerm: ${searchTerm}`);
      }}
    />
  );
};

export default SearchField;
