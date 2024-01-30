import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = ({ handleSubmit, searchResult }) => {
  const navigate = useNavigate();
  console.log(searchResult.length);
  return (
    <div className="coloring ">
      <div className="flex flex-col justify-center items-center w-[100%] h-[100vh] overlay">
        <p className="text-[2.6rem] lg:text-[3.5rem] tracking-[3px] my-[5%] text-white lg:my-[2%] font-[Britney] font-semibold leading-[3rem]">
          Git Quick Search
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-[95%] lg:w-[50%] bg-white flex flex-row justify-between items-center p-[6px]  rounded-[10px]"
        >
          <input
            placeholder="Meet Github users here..."
            className="check w-[100%]"
            name="query"
          />
          {searchResult.length ? (
            <button
              type="button"
              onClick={() => navigate("Form")}
              className="users w-[6rem] bg-[brown] p-[0.5rem] outline-none text-white"
            >
              View All
            </button>
          ) : (
            <button
              type="submit"
              className="users w-[6rem] bg-[brown] p-[0.5rem] outline-none text-white"
            >
              Search
            </button>
          )}
        </form>
        {searchResult.length > 10 ? (
          <i className="text-white">
            Too many matches please specify further or click search button
          </i>
        ) : (
          searchResult.map((user) => (
            <Link key={user.id} to={`UserDetail/${user.id}`}>
              <ul className="text-[1.5rem] leading-[3rem] flex flex-col justify-start items-start lg:w-[16vw]">
                <li>{user.login}</li>
              </ul>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
