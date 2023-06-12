import bodyParser from "body-parser";

export default async function criarUsuarioAsaas(req, res) {
  const token = process.env.TOKEN
  const url = process.env.API_CUSTOMERS
  
  bodyParser.json()(req, res, async () => {
    const novoUsuario = req.body;
    console.log(novoUsuario);


    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'access_token': `$${token}`
        },
        body: novoUsuario
      });

      console.log('Status:', response.status);
      console.log('Headers:', JSON.stringify(response.headers)); 

      const data = await response.json();
       console.log('Response:', data); 

      res.status(200).json({ data });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
}
