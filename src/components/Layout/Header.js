import React from "react";
import classes from "./Header.module.css";
import SearchField from "./SearchField";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <SearchField />
    </header>
  );
};

export default Header;
