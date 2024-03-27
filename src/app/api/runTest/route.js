// app/api/route.js
import { exec } from 'child_process';

export async function POST(req) {
    console.log("AQUI")
  try {
    const {command } = await req.json();
    const directory = `/Users/alexandreguz/Documents/BS2/qa/automation`;

    exec(command, { cwd: directory }, (error, stdout, stderr) => {
      if (error) {
        console.error('Erro ao executar o comando:', error);
        return new Response(JSON.stringify({ error: 'Erro ao executar o comando' }), { status: 500 });
      }

      console.log('Saída do comando:', stdout);
      return new Response(JSON.stringify({ output: stdout }), { status: 200 });
    });
  } catch (error) {
    console.error('Erro ao executar o comando:', error);
    return new Response(JSON.stringify({ error: 'Erro ao executar o comando' }), { status: 500 });
  }
}