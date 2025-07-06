import React from "react";
import { useParams } from "react-router";

const User = () => {
  let { userId } = useParams();
  console.log(userId);

  const pathName = window.location.pathname;
  console.log(pathName);
  console.log(pathName.endsWith("edit"));
  return (
    <div>
      <h2>User Page</h2>
      <p>pathName : {pathName}</p>
      <p>User Id : {userId}</p>
      {pathName.endsWith("edit") ? <p>u r in editing page</p> : <p>not</p>}
    </div>
  );
};

export default User;
