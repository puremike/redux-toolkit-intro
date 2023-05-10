import React from "react";
import Counter from "../features/counter/Counter";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <p>
        Here are some projects done <br /> with react redux-toolkit
      </p>
      <Link to="/counter">Counter App</Link>
      <Link to="/blog">Blog App</Link>
    </div>
  );
};

export default Home;
