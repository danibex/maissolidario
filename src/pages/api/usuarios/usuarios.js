import pool from '@/models/acess';
import { createTable } from '@/controllers/criarTabela';

export default async function handler(req, res) {
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
}
