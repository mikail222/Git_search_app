import React from "react";
import { Link } from "react-router-dom";

const Form = ({ searchResult }) => {
  return (
    <div className="mt-6">
      <h2 className=" display">Meet users</h2>
      <div className="gridStyle">
        {searchResult.map((user) => (
          <Link key={user.id} to={`UserDetail/${user.id}`}>
            <div className="container" style={{ width: "14rem" }}>
              <img src={user.avatar_url} alt="avarta" className="user" />
              <i className="mt-4">
                <i>user name</i>
                <br />
                <i style={{ fontSize: "1.5rem", lineHeight: "3rem" }}>
                  {user.login}
                </i>
              </i>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Form;
