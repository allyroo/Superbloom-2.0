import React from "react";
import "./index.css";
import ContentFrame from "./components/ContentFrame";
import DashGrid from "./components/DashGrid";
import Quote from "./components/DashboardComponents/Quote";

function App() {
  return (
    <div className="body">
      <ContentFrame />
      <DashGrid />
      <Quote />
    </div>
  );
}

export default App;
