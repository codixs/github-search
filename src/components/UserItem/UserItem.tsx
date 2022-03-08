import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./UserItem.module.css";
import { Link } from "react-router-dom";
import UserDetailsModel from "../../models/userDetails";
import UserItemModel from "../../models/userItem";
const { REACT_APP_GITHUB_TOKEN } = process.env;

const UserItem: React.FC<UserItemModel> = (props) => {
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

  async function getUserDetails(login: string) {
    try {
      const res = await axios.get(`${baseUrl}/users/${login}`, {
        headers: {
          authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
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
    getUserDetails(props.login);
  }, []);
  let detailUrl = `/user/${props.login}`;

  return (
    <div key={props.id} className={classes.container}>
      <img
        src={props.avatar_url}
        alt={userDetails.name}
        className={classes.img}
      />

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
