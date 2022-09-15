import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import "./index.scss";
const Nav = styled.div`
  color: red;
`;

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Users">Users</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
function NoMatch() {
  return <h2>NoMatch</h2>;
}

export default App;
