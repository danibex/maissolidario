import bodyParser from "body-parser";
export default function handler(req, res) {
    const { meuObjeto } = req.body;

    console.log(meuObjeto)
    const teste = meuObjeto

    bodyParser.json()(req, res, async () => {
        const novoUsuario = req.body;

        res.status(200).json({ data });
})
}