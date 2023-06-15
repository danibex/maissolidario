import pool from '@/models/acess';
import { listarParceiros } from '@/models/parceiros/retornaParceiros';
export default async function handler(req, res) {
    if(req.method == "GET") {
        try {
            const parceiros = await listarParceiros();
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
