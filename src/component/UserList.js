import React from "react";
import { useSelector } from "react-redux";
import User from "./User"; // Adjust the path according to your project structure

const UserList = () => {
  // Accessing the users array from userReducer in the Redux store
  const users = useSelector((state) => state.userReducer.users);

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
