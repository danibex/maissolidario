// Agrega informações da conta google do usuário no banco de dados mais solidário 

import pool from '@/models/acess';

export default async function handler(req, res) {
const metodo = req.method; 

switch (metodo) {
  case "GET":
   // const { rows: usuarios } = await pool.query('SELECT email FROM usuarios;');
   res.status(200).json("Funcionando!!!"); 
    break;
  case "POST": // inserindo dados de conta google de usuário em banco de dados da aplicação do mais solidário

  
  const user = req.body
  const userObj = JSON.parse(user)
  const { rows: usuariosEmail } = await pool.query('SELECT email FROM usuarios;');
  const usuarioExiste = usuariosEmail.filter((email) => email.email == userObj.email)
    if(usuarioExiste.length == 0){
      try {
          // Execute a consulta de inserção
          const query = 'INSERT INTO usuarios (uid, email, displayName) VALUES ($1, $2, $3)';
          const values = [userObj.uid, userObj.email, userObj.displayName];
          const result = await pool.query(query, values);
          console.log(userObj)
          console.log(`Objeto inserido com sucesso! Linhas afetadas: ${result.rowCount}`);
        } catch (error) {
          console.error('Erro ao inserir objeto:', error);
        }
      res.status(200).json(user)
    } else {
      console.log("Usuário já existe")
    }
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
