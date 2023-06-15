import pool from '@/models/acess';
import { createTable } from '@/models/parceiros/criarTabela';

export default async function handler(req, res) {
  if(req.method == "GET") {
        try {
        // Criar a tabela se ainda não existir
        await createTable();

        // Consultar os dados da tabela
        const { rows: parceiros } = await pool.query('SELECT * FROM parceiros;');
        console.log(parceiros);

        res.status(200).json(parceiros);
        } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro no servidor' });
        }
    } else if(req.method == "POST") {
        res.status(200).json(req.method)
        console.log(req.method)
    }   
}
