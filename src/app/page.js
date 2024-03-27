 // src/app/page.js
"use client";

import { useState } from "react";
import EnvironmentSelector from "./components/EnvironmentSelector";
import CategorySelector from "./components/CategorySelector";
import TestSelector from "./components/TestSelector";
import { commandOptions, environmentOptions, categories } from "./constants";

const getUniqueLabels = (options, category) => {
  const labels = options
    .filter((option) => option.category === category)
    .map((option) => option.label);
  return [...new Set(labels)]; // Removendo duplicados usando Set
};

export default function Home() {
  const [selectedEnvironment, setSelectedEnvironment] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTest, setSelectedTest] = useState("");

  const handleEnvironmentSelect = (environment) => {
    setSelectedEnvironment(environment);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedTest("");
  };

  const handleTestSelect = (test) => {
    console.log(test)
    setSelectedTest(test);
  };

  const handleRunTest = async () => {
    if (selectedEnvironment && selectedCategory && selectedTest) {
      const selectedCommand = commandOptions.find(
        (option) =>
          option.category === selectedCategory && option.label === selectedTest
      );

      if (selectedCommand) {
        const command = `MIX_ENV=${selectedEnvironment.toLowerCase()} ${selectedCommand.value}`;
        console.log(command)



  try {
    const response = await fetch('/api/runTest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ environment: selectedEnvironment, command })
    });

    if (!response.ok) {
      throw new Error('Erro ao executar o teste');
    }

    const { output } = await response.json();
    console.log('Saída do comando:', output);
  } catch (error) {
    console.error('Erro ao executar o comando:', error);
  }


      } else {
        console.error(
          "Comando não encontrado para a categoria e teste selecionados."
        );
      }
    } else {
      console.error("Por favor, selecione um ambiente, categoria e teste.");
    }
  };

  return (
    <div>
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
    <button onClick={handleRunTest}>Run Test</button>
  </div>
  );
}

