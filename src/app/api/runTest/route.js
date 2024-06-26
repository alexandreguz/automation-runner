import { exec } from 'child_process';
import { rootPath } from '@/app/config';

export async function POST(req) {
  try {
    const {command } = await req.json();
    const directory = rootPath ;

    return new Promise((resolve, reject) => {
      exec(command, { cwd: directory }, (error, stdout, stderr) => {
        if (error) {
          console.error('Erro ao executar o comando:', error);
          reject(new Response(JSON.stringify({ error: `Erro ${error }ao executar o comando` }), { status: 500 }));
        } else {
          resolve(new Response(JSON.stringify({ output: stdout }), { status: 200 }));
        }
      });
    });
  } catch (error) {
    console.error('Erro ao executar o comando:', error);
    return new Response(JSON.stringify({ error: `Erro ao executar o comando` }), { status: 500 });
  }
}