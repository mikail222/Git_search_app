import React from "react";
import { Link } from "react-router-dom";

const Home = ({ handleSubmit, searchResult }) => {
  return (
    <div className="home">
      <aside style={{ width: "50%" }} className="coloring">
        <div></div>
        <p>welcome...!</p>
        <h1 style={{ color: "white" }}>Git Search</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="search..."
            className="check"
            name="query"
            style={{ width: "60%", padding: "0.70rem", borderRadius: "15px" }}
          />
        </form>
        {searchResult < 10 ? (
          <i>Specify further</i>
        ) : (
          searchResult.map((user) => (
            <Link key={user.id} to={`UserDetail/${user.id}`}>
              <ul style={{ fontSize: "1.5rem", lineHeight: "3rem" }}>
                <li>{user.login}</li>
              </ul>
            </Link>
          ))
        )}
        <Link to="Form">
          <button
            style={{ display: "flex", justifyContent: "flex-start" }}
            className="users"
          >
            Git Users
          </button>
        </Link>
      </aside>
      <aside style={{ width: "50%" }}>
        <img
          src="https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2dyYW1tZXIlMjB3b3JzcGFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="workspace"
          style={{ width: "100%", height: "90vh" }}
        />
      </aside>
    </div>
  );
};

export default Home;
