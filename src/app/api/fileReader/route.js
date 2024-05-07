import fs from 'fs';
import path from 'path';

export async function GET(request) {
  try {
    const filePath = '/Users/alexandreguz/Documents/BS2/qa/automation/test/generated_test_data.txt';
    const fileContent = await fs.promises.readFile(filePath, 'utf8');

    return new Response(fileContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
    return new Response('Erro ao ler o arquivo', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}
