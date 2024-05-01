export function parseOutput(output) {
  const lines = output.split('\n');
  const relevantInfo = [];

  for (const line of lines) {
    if (line.includes('user email') || line.includes('cnpj') || line.includes('Using the remessa_generated_seu_numero') || line.includes('Using the remessa_generated_file')) {
      relevantInfo.push(line.trim());
    }
  }

  if (relevantInfo.length > 0) {
      const formattedInfo = Array.from(new Set(relevantInfo.map((line) => line.replace(/^(Using the |user email:|cnpj:)/, '').trim())));
      const successMessage = ['SUCCESS', ...formattedInfo]; 
      return {message: successMessage[0], result: successMessage[1], number: successMessage [2]};
  } else {
      return 'Nenhuma informação relevante encontrada.';
  }
}