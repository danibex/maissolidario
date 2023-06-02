export default function Footer() {
return(
    <div className="bg-green-400 w-[100%] h-auto p-4 shadow-lg text-slate-700 flex justify-center items-center flex-col">
        <div className="flex sm:flex-row flex-col justify-around items-center w-full sm:w-[80%]">
            <div className="h-[200px] flex flex-col justify-center items-center">
                <h1 className="mb-2 text-xl font-bold">Contatos</h1>
                <div className="flex flex-col justify-center items-center">
                    <p>contato@maissolidario.com.br</p>
                    <p>maissolidarioadm@gmail.com</p>
                    <p>(71) 9 9259-2363</p>
                    <p>(71) 9 8761-2190</p>
                </div>
            </div>
            <div className="h-[150px] flex flex-col justify-center items-center">
                <h1 className="mb-2 text-xl font-bold">Bolsas de Estudo</h1>
                <div className="flex flex-col justify-center items-center">
                    <p>Bolsas</p>
                    <p>Graduação</p>
                    <p>Pós-Graduação</p>
                    <p>Técnico</p>
                    <p>Colégio</p>
                </div> 
            </div>
            <div className="h-[150px] flex flex-col justify-center items-center">
                <h1 className="mb-2 text-xl font-bold">Links Úteis</h1>
                <div className="flex flex-col justify-center items-center">
                    <p>Atendimento</p>
                    <p>Blog</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center text-center">
            <p>© 2022 Todos os direitos reservados. Mais Solidário Bolsas de Estudo - CNPJ: 25.230.193/0001-06</p>
        </div>
    </div>
)
}