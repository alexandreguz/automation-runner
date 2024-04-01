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
        const successMessage = 'SUCCESS\n' + formattedInfo.join('\n');
      return successMessage ;
    } else {
      return { success: false, message: 'Nenhuma informação relevante encontrada.' };
    }
  }


// --------------------------------- Outras ideias para extrair valor do texto ------------------------


// export function extractValue(line) {
//     const usingMatch = line.match(/Using the remessa_generated_(\w+): "(.*?)"/g) ;
//     console.log("REGEX", usingMatch)
//     if (usingMatch) {
//         console.log("USING MATCH",{ key: usingMatch[1], value: usingMatch[2] })

//       return { key: usingMatch[1], 
//                value: usingMatch[2],
//             };
//     }
//     return null;
//   }


//   export function extrairValores(texto) {
//     const padrao = /Using the remessa_generated_(\w+): "(.*?)"/g;
//     const matches = [];
//     let match;
//     while ((match = padrao.exec(texto)) !== null) {
//       matches.push({
//         tipo: match[1],
//         valor: match[2]
//       });
//     }
//     return matches;
//   }