import pool from '@/models/acess';

export default async function handler(req, res) {
  try {
    const { nome, email, senha } = req.body; // Obtenha os dados do usuário do corpo da solicitação (supondo que estejam sendo enviados no formato JSON)
    const query = `
      INSERT INTO usuarios (nome, email, senha)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const values = [nome, email, senha];

    const { rows: [novoUsuario] } = await pool.query(query, values);

    console.log('Novo usuário criado:', novoUsuario);

    res.status(201).json(novoUsuario); // Envie uma resposta com o novo usuário criado
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ message: 'Ocorreu um erro no servidor' });
  }
}
