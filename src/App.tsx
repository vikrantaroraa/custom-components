import React from "react";
import "./App.css";
import SimpleFadingTab from "./components/SimpleFadingTab";
import FolderStructure from "./components/FolderStructure";
import Comment from "./components/Comment";

function App() {
  return (
    <div className="App">
      <SimpleFadingTab />
      <FolderStructure />
      <Comment />
    </div>
  );
}

export default App;
