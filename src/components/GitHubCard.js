// src/components/GitHubCard.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const GitHubCard = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (username) {
      fetchUserData();
    }
  }, [username]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchUserData();
        }}
      >
        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {userData && (
        <div className="github-card">
          <img src={userData.avatar_url} alt="Avatar" />
          <h2>{userData.login}</h2>
          <p>Name: {userData.name}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <p>Public Gists: {userData.public_gists}</p>
          <p>Profile Created At: {new Date(userData.created_at).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default GitHubCard;
