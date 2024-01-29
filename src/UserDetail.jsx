import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const UserDetail = ({ baseUrl, searchResult }) => {
  const [searchUser, setSearchUser] = useState({});
  console.log(searchUser);
  const { id } = useParams();
  console.log(baseUrl);
  const userId = searchResult.filter((user) => user.id === Number(id));
  console.log(userId);

  return (
    <div style={{ color: "white" }} className="userDetails">
      <div>
        {userId?.map((user) => (
          <div key={user.id} className="details">
            <img src={user.avatar_url} alt="user" className="object-cover" />
            <p className="userName"> {user.login}</p>
            <a href={user.html_url}>visit {user.login}</a>
            <p>score {user.score}</p>
            <p>Id {user.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetail;
