import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserDetailsModel from "../../models/userDetails";
import axios from "axios";
import classes from "./UserDetails.module.css";
import followIMG from "../../assets/followers.png";

const UserDetails: React.FC = () => {
  type LoginParams = {
    login: string;
  };
  let { login } = useParams<LoginParams>();
  const [userDetails, setUserDetails] = useState<UserDetailsModel>({
    name: "",
    bio: "",
    location: "",
    login: "",
    avatar_url: "",
    followers: 0,
    following: 0,
  });
  const baseUrl = `https://api.github.com`;
  const { REACT_APP_GITHUB_TOKEN } = process.env;

  async function getUserDetails() {
    try {
      const res = await axios.get(`${baseUrl}/users/${login}`, {
        headers: {
          Authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
        },
      });
      const newItem = new UserDetailsModel(
        res.data["name"],
        res.data["bio"],
        res.data["location"],
        res.data["login"],
        res.data["avatar_url"],
        res.data["followers"],
        res.data["following"]
      );
      setUserDetails(newItem);
    } catch (err) {
      console.log("error", err);
    }
  }

  useEffect(() => {
    getUserDetails();
  }, []);

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
