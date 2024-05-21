"use client";
import { parseOutput } from "../success_parser";
import Output from "./Output";
import { useState, useEffect } from "react";
import EnvironmentSelector from "./EnvironmentSelector";
import CategorySelector from "./CategorySelector";
import TestSelector from "./TestSelector";
import { commandOptions, environmentOptions, categories } from "../constants";

const outputObject = {
  message: "",
  result: "",
  number: "",
};

const getUniqueLabels = (options, category) => {
  const labels = options
    .filter((option) => option.category === category)
    .map((option) => option.label);
  return [...new Set(labels)];
};

export default function Home() {
  const [selectedEnvironment, setSelectedEnvironment] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTest, setSelectedTest] = useState("");
  const [output, setOutput] = useState("");
  const [testStatus, setTestStatus] = useState("");
  const [testResult, setTestResult] = useState({
    output: "",
    status: "pending",
  });

  const handleEnvironmentSelect = (environment) => {
    setSelectedEnvironment(environment);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedTest("");
  };

  const handleTestSelect = (test) => {
    setSelectedTest(test);
  };

  const handleRunTest = async () => {
    if (selectedEnvironment && selectedCategory && selectedTest) {
      setOutput(<div className="text-sky-400 justify-start">The Test is Running</div> );
      setTestStatus("pending");

      const selectedCommand = commandOptions.find(
        (option) =>
          option.category === selectedCategory && option.label === selectedTest
      );
      if (selectedCommand) {
        const command = `MIX_ENV=${selectedEnvironment.toLowerCase()} ${
          selectedCommand.value
        }`;

        try {
          const response = await fetch("/api/runTest", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ environment: selectedEnvironment, command }),
          });

          if (!response.ok) {
            console.log("ERROR");
            setTestStatus("error");
            throw new Error("Failed During Testing");
          }
          const responseData = await response.json();
          setOutput(parseOutput(responseData.output));
          setTestStatus("success");
        } catch (error) {
          console.error("Error:", error);
          setTestStatus("error");
          setOutput(`Error: ${error.message}`);
        }
      } else {
        console.error(
          "Comando não encontrado para a categoria e teste selecionados."
        );
        setTestStatus("not_found");
        setOutput(
          "Comando não encontrado para a categoria e teste selecionados."
        );
      }
    } else {
      setOutput("Por favor, selecione um ambiente, categoria e teste.");
    }
  };

  return (
    <div className="run-test-grid w-full p-8">
      <EnvironmentSelector
        onSelect={handleEnvironmentSelect}
        options={environmentOptions}
      />
      <CategorySelector
        categories={categories}
        onSelect={handleCategorySelect}
      />
      {selectedCategory && (
        <TestSelector
          tests={getUniqueLabels(commandOptions, selectedCategory)}
          onSelect={handleTestSelect}
        />
      )}
      <div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleRunTest}
        >
          Run Test
        </button>
        {console.log(output)}
        {<Output output={output} testStatus={testStatus} />}
      </div>
    </div>
  );
}
