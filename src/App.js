import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redrect,
  Switch,
} from "react-router-dom";
import "./index.css";
import About from "./components/About";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import ContentFrame from "./components/ContentFrame";
import DashGrid from "./components/DashGrid";

function App() {
  return (
    <Router>
      <main>
        <Route path="/" exact>
          <ContentFrame />
          <DashGrid />
        </Route>
        <Route path="/about" exact>
          <About />
          <ContentFrame />
        </Route>
        <Route path="/signup">
          <SignUp />
          <ContentFrame />
        </Route>
        <Route path="/login">
          <Login />
          <ContentFrame />
        </Route>
      </main>
    </Router>
    // <div className="body">
  );
}

export default App;
