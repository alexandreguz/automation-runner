export function styleOutput(output) {
    const lines = output.trim().split('\n');
    let formattedOutput = '';
  
    for (const line of lines) {
      if (line.includes('remessa_generated_seu_numero:')) {
        formattedOutput += `<div class="output-section">
          <span class="output-label">Número da Remessa:</span>
          <span class="output-value">${line.split(':')[1].trim().replace(/"/g, '')}</span>
        </div>`;
      } else if (line.includes('remessa_generated_file:')) {
        formattedOutput += `<div class="output-section">
          <span class="output-label">Arquivo da Remessa:</span>
          <span class="output-value">${line.split(':')[1].trim().replace(/"/g, '')}</span>
        </div>`;
      } else if (line.includes('user email:')) {
        formattedOutput += `<div class="output-section">
          <span class="output-label">E-mail do Usuário:</span>
          <span class="output-value">${line.split(':')[1].trim().replace(/"/g, '')}</span>
        </div>`;
      } else if (line.includes('cnpj:')) {
        formattedOutput += `<div class="output-section">
          <span class="output-label">CNPJ:</span>
          <span class="output-value">${line.split(':')[1].trim().replace(/"/g, '')}</span>
        </div>`;
      } else if (line === 'SUCCESS') {
        formattedOutput += `<div class="output-section">
          <span class="output-label">Resultado:</span>
          <span class="output-value success">${line}</span>
        </div>`;
      }
    }
  
    return formattedOutput;
  }