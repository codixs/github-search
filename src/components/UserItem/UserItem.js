import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./UserItem.module.css";

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
  return (
    <div key={props.id} className={classes.container}>
      <img src={props.avatar} alt={userDetails.name} className={classes.img} />
      <div className={classes.name}>{userDetails.name}</div>
      <div className={classes.login}>{props.login}</div>
      <div className={classes.bio}>{userDetails.bio}</div>
      <div className={classes.location}>{userDetails.location}</div>
    </div>
  );
};

export default UserItem;
