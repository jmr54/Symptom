import React, { useState, useEffect } from "react";
import httpClient from "../Axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  const logoutUser = async () => {
    await httpClient.post("//localhost:5000/logout");
    window.location.href = "/";
  };

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("//localhost:5000/@me");
        setUser(resp.data);
      } catch (error) {
        console.log("Not authenticated");
      }
    })();
  }, []);

  
  return (
    <div>
      {user != null ? (
        <div>
          <h2>Welcome back {user.email}</h2>
          <p>ID: {user.id}</p>

          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>You are not logged in</h1>
          <h2>Please either log in or register</h2>
        </div>
      )}
    </div>
  )
}

export default Profile