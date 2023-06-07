import Link from "next/link"
export default function Footer() {
return(
    <div className="bg-green-400 w-[100%] h-auto p-4 shadow-lg text-slate-700 flex justify-center items-center flex-col">
        <div className="flex sm:flex-row flex-col justify-around items-center w-full sm:w-[80%]">
            <div className="h-[200px] flex flex-col justify-center items-center">
                <h2 className="mb-2 text-xl font-bold">Contatos</h2>
                <div className="flex flex-col justify-center items-center">
                    <Link href="/" className="hover:underline hover:text-slate-200 active:text-slate-400">contato@maissolidario.com.br</Link>
                    <Link href="/" className="hover:underline hover:text-slate-200 active:text-slate-400">maissolidarioadm@gmail.com</Link>
                    <Link href="/" className="hover:underline hover:text-slate-200 active:text-slate-400">(71) 9 9259-2363</Link>
                    <Link href="/" className="hover:underline hover:text-slate-200 active:text-slate-400">(71) 9 8761-2190</Link>
                </div>
            </div>
            <div className="h-[150px] flex flex-col justify-center items-center">
                <h2 className="mb-2 text-xl font-bold">Bolsas de Estudo</h2>
                <div className="flex flex-col justify-center items-center">
                <Link href="/bolsas/graduacao" className="hover:underline hover:text-slate-200 active:text-slate-400">Graduação</Link>
                <Link href="/bolsas/pos-graduacao" className="hover:underline hover:text-slate-200 active:text-slate-400">Pós-Graduação</Link>
                <Link href="/bolsas/tecnico" className="hover:underline hover:text-slate-200 active:text-slate-400">Técnico</Link>
                <Link href="/bolsas/colegio" className="hover:underline hover:text-slate-200 active:text-slate-400">Colégio</Link>
                </div> 
            </div>
            <div className="h-[150px] flex flex-col justify-center items-center">
                <h2 className="mb-2 text-xl font-bold">Links Úteis</h2>
                <div className="flex flex-col justify-center items-center">
                <Link href="/" className="hover:underline hover:text-slate-200 active:text-slate-400">Atendimento</Link>
                <Link href="/" className="hover:underline hover:text-slate-200 active:text-slate-400">Blog</Link>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center text-center">
            <p>© 2022 Todos os direitos reservados. Mais Solidário Bolsas de Estudo - CNPJ: 25.230.193/0001-06</p>
        </div>
    </div>
)
}