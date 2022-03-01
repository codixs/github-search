import React from "react";
import classes from "./Header.module.css";
import SearchField from "./SearchField";
import Logo from "./Logo";

const Header: React.FC<{ onQuery: (query: string) => void }> = (props) => {
  //pass the query to HOC
  const changeQueryHandler = (q: string) => {
    props.onQuery(q);
  };
  return (
    <header className={classes.header}>
      <Logo />
      <SearchField onChangeQuery={changeQueryHandler} />
    </header>
  );
};

export default Header;
