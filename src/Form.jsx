import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Form = ({ searchResult }) => {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
      <h2 className=" display">Meet users</h2>
      <div className="gridStyle">
        {searchResult.map((user) => (
          <div key={user.id}>
            <div
              className="container w-[14rem]"
              onClick={() => navigate(`UserDetail/${user.id}`)}
            >
              <img src={user.avatar_url} alt="avarta" className="user" />
              <p className="text-[1.5rem] leading-[3rem] text-white">
                {user.login}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
