import React from "react";
import classes from "./SearchField.module.css";

const SearchField = () => {
  return (
    <div className={classes.search}>
      <input type="text" placeholder="Search" className={classes.input} />
    </div>
  );
};

export default SearchField;
