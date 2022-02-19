import React from "react";
import classes from "./Header.module.css";
import SearchField from "./SearchField";
import Logo from "./Logo";

const Header = (props) => {
  const changeQueryHandler = (query) => {
    props.onQuery(query);
  };
  return (
    <header className={classes.header}>
      <Logo />
      <SearchField onChangeQuery={changeQueryHandler} />
    </header>
  );
};

export default Header;
