import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import Form from "./Form";
import Home from "./Home";
import { Routes, Route } from "react-router";
import UserDetail from "./UserDetail";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  console.log(searchResult);
  const baseUrl = "https://api.github.com";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const findPerson = e.target.query.value;
    e.target.value = "";
    const searchUrl = `${baseUrl}/search/users?q=${findPerson}`;

    try {
      const { data } = await axios(searchUrl);
      setSearchResult(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="wrappDiv">
        <Routes>
          <Route
            path="/"
            element={
              <Home handleSubmit={handleSubmit} searchResult={searchResult} />
            }
          />
          <Route
            path="Form"
            element={
              <Form searchResult={searchResult} handleSubmit={handleSubmit} />
            }
          />
          <Route>
            <Route
              path="UserDetail/:id"
              element={
                <UserDetail baseUrl={baseUrl} searchResult={searchResult} />
              }
            />
          </Route>
          <Route
            path="Form/UserDetail/:id"
            element={
              <UserDetail baseUrl={baseUrl} searchResult={searchResult} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
