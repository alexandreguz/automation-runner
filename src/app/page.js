// src/app/page.js
"use client";
import { useState } from "react";
import Navbar from "./components/NavBar";
import RunTestComponent from "./components/RunTestComponent";
import { commandOptions, environmentOptions, categories } from "./constants";

export default function Home() {
  const [showRunTest, setShowRunTest] = useState(false);

  const handleRunTest = () => {
    setShowRunTest(true);
  };

  return (
    <div>
      <div className="flex min-h-screen flex-col items-center p-24 ">
      <Navbar onRunTest={handleRunTest} />
      {showRunTest && (
        <RunTestComponent
          commandOptions={commandOptions}
          environmentOptions={environmentOptions}
          categories={categories}
        />
      )}
      </div>
    </div>
  );
}