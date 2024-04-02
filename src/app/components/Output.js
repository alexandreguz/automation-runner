// o componente nao esta sendo chamado

import React from 'react';

const Output = ({ styledOutput }) => {
    console.log(styledOutput)
  if (!styledOutput || typeof styledOutput !== 'object') {
    console.log("NAO OBJECT")
    return <pre>{styledOutput}</pre>;
  }

  return (
    <div className="output-container">
      {styledOutput.result && (
        <div className="output-section">
          <span className="output-label">Resultado:</span>
          <span className="output-value success">{styledOutput.result}</span>
        </div>
      )}
      {styledOutput.remessa_generated_seu_numero && (
        <div className="output-section">
          <span className="output-label">Número da Remessa:</span>
          <span className="output-value">{styledOutput.remessa_generated_seu_numero}</span>
        </div>
      )}
      {styledOutput.remessa_generated_file && (
        <div className="output-section">
          <span className="output-label">Arquivo da Remessa:</span>
          <span className="output-value">{styledOutput.remessa_generated_file}</span>
        </div>
      )}
      {styledOutput.user_email && (
        <div className="output-section">
          <span className="output-label">E-mail do Usuário:</span>
          <span className="output-value">{styledOutput.user_email}</span>
        </div>
      )}
      {styledOutput.cnpj && (
        <div className="output-section">
          <span className="output-label">CNPJ:</span>
          <span className="output-value">{styledOutput.cnpj}</span>
        </div>
      )}
    </div>
  );
};

export default Output;