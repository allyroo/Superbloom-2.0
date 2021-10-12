import React, { useState, useEffect } from "react";
import "./index.css";
import ContentFrame from "./components/ContentFrame";
import DashGrid from "./components/DashGrid";

function App() {
  return (
    <div className="body">
      <ContentFrame />
      <DashGrid />
    </div>
  );
}

export default App;
