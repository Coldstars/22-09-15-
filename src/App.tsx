import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import "./index.scss";
import "./helper.scss";
require("./icons/money.svg");
require("./icons/note.svg");
require("./icons/statistic.svg");

const AppView = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column-reverse;
`;
const Nav = styled.div`
  height: 83px;
  display: flex;
  border: 1px solid red;
  > ul {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > li {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      > svg {
      }
    }
  }
`;
const Content = styled.main`
  flex: 1;
  border: 1px solid yellow;
`;

function App() {
  return (
    <div className="App">
      <AppView>
        <Router>
          <Nav>
            <ul>
              <li>
                <svg className="icon">
                  <use xlinkHref="#note" />
                </svg>
                <Link to="/About">标签</Link>
              </li>
              <li>
                <svg className="icon">
                  <use xlinkHref="#money" />
                </svg>
                <Link to="/">记账</Link>
              </li>
              <li>
                <svg className="icon">
                  <use xlinkHref="#statistic" />
                </svg>
                <Link to="/Users">统计</Link>
              </li>
            </ul>
          </Nav>
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Users" element={<Users />} />
              <Route path="/*" element={<NoMatch />} />
            </Routes>
          </Content>
        </Router>
      </AppView>
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
