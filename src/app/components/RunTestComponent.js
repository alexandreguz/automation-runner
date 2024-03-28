 // src/app/page.js
 "use client";

 import { useState } from "react";
 import EnvironmentSelector from "./EnvironmentSelector";
 import CategorySelector from "./CategorySelector";
 import TestSelector from "./TestSelector";
 import { commandOptions, environmentOptions, categories } from "../constants";
 
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
   const [output, setOutput] = useState("");
 
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
         try {
           const response = await fetch("/api/runTest", {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({ environment: selectedEnvironment, command }),
           });
           if (!response.ok) {
             throw new Error("Erro ao executar o teste");
           }
           const { output } = await response.json();
           setOutput(output);
         } catch (error) {
           console.error("Erro ao executar o comando:", error);
           setOutput(`Erro ao executar o comando: ${error.message}`);
         }
       } else {
         console.error(
           "Comando não encontrado para a categoria e teste selecionados."
         );
         setOutput(
           "Comando não encontrado para a categoria e teste selecionados."
         );
       }
     } else {
       console.error("Por favor, selecione um ambiente, categoria e teste.");
       setOutput("Por favor, selecione um ambiente, categoria e teste.");
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
     <button   className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleRunTest}>Run Test</button>
     {output && <pre>{output}</pre>}
   </div>
   );
 }