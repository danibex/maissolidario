export default function handler(req, res) {
  const method = req.method;
  const params = req.query;
  const headers = req.headers;
  const body = req.body;
  const url = req.url

  res.status(200).json({ 
    Metodo: method,
    dadosURL: params,
    Cabecalho: headers,
    Corpo: body,
    URLrequisicao: url
   });
}
