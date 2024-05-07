// src/app/page.js
"use client";
import { useState } from "react";
import Navbar from "./components/NavBar";
import RunTestComponent from "./components/RunTestComponent";
import { commandOptions, environmentOptions, categories } from "./constants";
import FileViewer from "./components/FileViwer";

export default function Home() {
  const [showRunTest, setShowRunTest] = useState(false);
  const [showFile, setShowFile] = useState(false);

  const handleRunTest = () => {
    setShowRunTest(true);
  };

  const handleShowFile = () => {
    setShowFile(true);
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center">
      <Navbar onRunTest={handleRunTest} onShowFile={handleShowFile}/>
      {showRunTest && (
        <RunTestComponent
          commandOptions={commandOptions}
          environmentOptions={environmentOptions}
          categories={categories}
        />
      )}

      {showFile && (<FileViewer/>)}
      </div>
    </>
  );
}