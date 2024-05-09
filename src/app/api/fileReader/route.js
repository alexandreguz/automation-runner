import fs from 'fs';

export async function GET(request) {
  try {
    const filePath = '/Users/alexandreguz/Documents/BS2/qa/automation/test/generated_test_data.txt';
    const fileContent = await fs.promises.readFile(filePath, 'utf8');
    const lines = fileContent.trim().split('\n');
    const data = {};

    lines.forEach(line => {
      const [key, value] = line.split(': ');
      data[key] = value;
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
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