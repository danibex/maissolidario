import pool from "@/models/acess";
export const createTable = async () => {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS parceiros (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100),
        imagem VARCHAR(100)
      )
    `;
    await pool.query(createTableQuery);
    console.log('Tabela criada ou já existente!');
  } catch (error) {
    console.error('Erro ao criar tabela:', error);
  }
};