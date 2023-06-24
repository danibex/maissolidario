// Agrega informações da conta google do usuário no banco de dados mais solidário 

import pool from '@/models/acess';

export default async function handler(req, res) {
const metodo = req.method; 
const paginacao = req.query.graduacao - 1;
const camposGraduacao = 'id, nome, valor_cheio, porcentagem_desconto, valor_com_desconto, economia_total, salario_medio'
switch (metodo) {
  case "GET":
   // const { rows: usuarios } = await pool.query('SELECT email FROM usuarios;');
   const { rows: cursos } = await pool.query(`SELECT ${camposGraduacao} FROM cursos LIMIT 9 OFFSET ${paginacao * 9};`)
   const consultarLinhas = await pool.query(`SELECT COUNT(*) FROM cursos;`)
   const limite = consultarLinhas.rows[0].count;
   res.status(200).send({cursos: cursos, limite: limite}); 
    break;

  case "POST": 
    res.status(200).json("Funciona Também!!!")
    break;
  case "PUT":
    res.status(200).json("Funciona Também!!!")

    break;
  case "DELETE":
    res.status(200).json("Funciona Também!!!")

    break;
  default:
    res.status(200).json("Método HTTP desconhecido");

    break;
}
}
