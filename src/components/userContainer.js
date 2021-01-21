import React from "react";
import "../styles/card.css";
import { useState } from "react";

const UserContainer = ({ user }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  return (
    <div className="card">
      <img src={user.picture.large} alt="Avatar"></img>
      <button
        onClick={() => {
          setShowMoreInfo(!showMoreInfo);
        }}
      >
        Show More info
      </button>
      {showMoreInfo ? (
        <div className="container">
          <h1>{`${user.name.first} ${user.name.last}`}</h1>
          <p>{user.gender}</p>
          <p>{user.dob.age}</p>
          <p>{user.email}</p>
          <p>{`Location ${user.location.city}, ${user.location.country} ${user.location.postcode}`}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserContainer;
