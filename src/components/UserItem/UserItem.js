import React from "react";

const UserItem = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.nickname}</div>
      <div>{props.avatar}</div>
    </div>
  );
};

export default UserItem;
