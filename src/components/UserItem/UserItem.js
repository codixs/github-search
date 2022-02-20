import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./UserItem.module.css";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  const [userDetails, setUserDetails] = useState([]);
  const baseUrl = `https://api.github.com`;
  const access_token = "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";

  async function getUserDetails(login) {
    try {
      const res = await axios.get(`${baseUrl}/users/${login}`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      });
      setUserDetails(res.data);
    } catch (err) {
      console.log("error", err);
    }
  }
  useEffect(() => {
    getUserDetails(props.login);
  }, []);
  let detailUrl = `/user/${props.login}`;
  return (
    <div key={props.id} className={classes.container}>
      <img src={props.avatar} alt={userDetails.name} className={classes.img} />

      <Link to={detailUrl} className={classes.link}>
        <div className={classes.name}>{userDetails.name}</div>
      </Link>

      <div className={classes.login}>{props.login}</div>
      <div className={classes.bio}>{userDetails.bio}</div>
      <div className={classes.location}>{userDetails.location}</div>
    </div>
  );
};

export default UserItem;
