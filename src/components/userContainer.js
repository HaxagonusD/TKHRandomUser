import React from "react";
import "../styles/card.css";

const UserContainer = ({ response }) => {
  const user = response.data.results[0];
  return (
    <div className="card">
      <img src={user.picture.large} alt="Avatar"></img>
      <div className="container">
        <h1>{`${user.name.first} ${user.name.last}`}</h1>
        <p>{user.gender}</p>
        <p>{user.dob.age}</p>
        <p>{user.email}</p>
        <p>{`Location ${user.location.city}, ${user.location.country} ${user.location.postcode}`}</p>{" "}
      </div>
    </div>
  );
};

export default UserContainer;
