import React from "react";
import "./App.css";
import SimpleFadingTab from "./components/SimpleFadingTab";
import FolderStructure from "./components/FolderStructure";
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
      <SimpleFadingTab />
      <FolderStructure />
      <Comments />
    </div>
  );
}

export default App;
