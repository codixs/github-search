import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "./UserDetails.module.css";
import followIMG from "../../assets/followers.png";

const UserDetails = () => {
  let { login } = useParams();
  const [userDetails, setUserDetails] = useState([]);
  const baseUrl = `https://api.github.com`;
  const { REACT_APP_GITHUB_TOKEN } = process.env;

  async function getUserDetails(login) {
    try {
      const res = await axios.get(`${baseUrl}/users/${login}`, {
        headers: {
          Authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
        },
      });
      setUserDetails(res.data);
    } catch (err) {
      console.log("error", err);
    }
  }
  useEffect(() => {
    getUserDetails(login);
  }, []);
  console.log(userDetails);
  return (
    <div className={classes.container}>
      <img
        src={userDetails.avatar_url}
        alt={userDetails.name}
        className={classes.img}
      />
      <div className={classes.full_name}>{userDetails.name}</div>
      <div className={classes.login}>{userDetails.login}</div>
      <div className={classes.margin}>
        <img src={followIMG} className={classes.follow_img} />
        <div className={classes.follow}>{userDetails.followers} Followers</div>
        <div className={classes.follow}>{userDetails.following} Following</div>

        {/* I couldn't find star number for user in  */}
      </div>
    </div>
  );
};

export default UserDetails;
