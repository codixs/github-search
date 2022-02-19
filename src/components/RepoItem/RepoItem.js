import React from "react";
import dateFormat from "dateformat";

import classes from "./RepoItem.module.css";
import repoIMG from "../../assets/repo.png";
import starIMG from "../../assets/star.png";

const RepoItem = (props) => {
  return (
    <div key={props.id} className={classes.container}>
      <img src={repoIMG} className={classes.img} />
      <div className={classes.name}>{props.name}</div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.last_row}>
        <img src={starIMG} className={classes.star_img} />
        <div className={classes.last_parm}>{props.stars}</div>
        {props.language ? (
          <div className={classes.last_parm}>{props.language}</div>
        ) : (
          ""
        )}
        {props.license ? (
          <div className={classes.last_parm}>{props.license}</div>
        ) : (
          ""
        )}
        <div className={classes.last_parm}>
          Updated on {dateFormat(props.updatedDate, "dd mmm yyyy")}
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
