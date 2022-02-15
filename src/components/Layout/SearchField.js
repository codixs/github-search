import React from "react";
import classes from "./SearchField.module.css";

const SearchField = () => {
  return (
    <div>
      <input type="text" placeholder="Search" className={classes.input} />
    </div>
  );
};

export default SearchField;
