import React, { useEffect, useState } from "react";
import FetchUserButton from "./components/fetchUserButton";
import fetchUser from "./services/rando_user";
import "./App.css";

import UserContainer from "./components/userContainer";

//.env, organization, react router, read me, components only have one use
//component hierachy
//erd diagram -> show the structure of your schema

function App() {
  const [response, setResponse] = useState({
    data: {
      results: [
        {
          cell: "empty",
          email: "empty",
          gender: "empty",
          dob: { age: "empty", date: "empty" },
          location: {
            city: "empty",
            coordiantes: { latitude: "empty", longitude: "empty" },
            country: "empty",
            postcode: "empty",
            start: "empty",
          },
          street: {},
          timezone: {},
          login: {},
          name: { title: "empty", first: "empty", last: "empty" },
          picture: {},
          registered: {},
        },
      ],
    },
  });
  useEffect(() => {
    (async () => {
      setResponse(await fetchUser());
    })();
  }, []);

  const getNewUser = async () => {
    setResponse(await fetchUser());
  };

  return (
    <div className="App">
      <header className="App-header">Random user Fetcher</header>

      <UserContainer response={response} />

      <FetchUserButton getNewUser={getNewUser} />
    </div>
  );
}

export default App;
