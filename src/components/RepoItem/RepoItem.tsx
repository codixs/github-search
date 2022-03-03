import dateFormat from "dateformat";

import React from "react";
import { Link } from "react-router-dom";
import RepoItemModel from "../../models/repoItem";

import classes from "./RepoItem.module.css";
import repoIMG from "../../assets/repo.png";
import starIMG from "../../assets/star.png";
const RepoItem: React.FC<RepoItemModel> = (props) => {
  return (
    <div key={props.id} className={classes.container}>
      <img src={repoIMG} className={classes.img} alt={props.name} />
      <Link to="" className={classes.link}>
        <div className={classes.name}>{props.name}</div>{" "}
      </Link>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.last_row}>
        <img src={starIMG} className={classes.star_img} alt={props.name} />
        <div className={classes.last_parm}>{props.stars}</div>
        {props.language ? (
          <div className={classes.last_parm}>{props.language}</div>
        ) : (
          ""
        )}
        {/* {props.license ? (
          <div className={classes.last_parm}>{props.license}</div>
        ) : (
          ""
        )} */}
        Updated on {dateFormat(props.updated_at, "dd mmm yyyy")}
      </div>
    </div>
  );
};

export default RepoItem;
