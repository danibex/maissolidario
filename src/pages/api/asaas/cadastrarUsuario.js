import bodyParser from "body-parser";

export default async function criarUsuarioAsaas(req, res) {
  const token = process.env.TOKEN
  const urlCriar = process.env.API_CREATE_CUSTOMER
  const urlConsultar = process.env.API_LIST_CUSTOMER_CPF

  
  bodyParser.json()(req, res, async () => {
    const novoUsuario = req.body;
    
    try {
      const consultar = await fetch(`${urlConsultar}${novoUsuarioObjeto.cpfCnpj}`, {
        method: 'GET',
        headers: {
          'access_token': `$${token}`
        }
      })
      const dadosConsulta = await consultar.json();
      console.log(`Dados da consulta ${dadosConsulta}`)
      if(dadosConsulta.data.length >= 1) {
        res.status(200).json({ resposta: "Usuário existente", usuario: true });
      } else {
        const criar = await fetch(urlCriar, {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          'access_token': `$${token}`
        },
        body: novoUsuario
      });
      console.log('Status:', criar.status);
      console.log('Headers:', JSON.stringify(criar.headers)); 

      const data = await criar.json();
      console.log('Response:', data); 
      
      res.status(200).json({ resposta: "Usuário não existe", resposta2: data, usuario: false });
    }
    

    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
}
