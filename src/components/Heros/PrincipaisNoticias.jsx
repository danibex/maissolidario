export default function PrincipaisNoticias() {
    return(
        <div className="bg-slate-100 w-[100%] h-auto p-4 shadow-lg">
            <h1>Últimas Novidades</h1>
            <div>
                <div className="w-[250px] h-[345px] justify-between flex flex-col border border-spacing-1 rounded-lg pb-3 shadow-lg">
                {/*url, width, nomeDoCurso, precoCheio, porcentagemDesconto, valorComDesconto, salarioMedio*/}
                    <div className="rounded-md mx-1 my-1">
                        Imagem Vai aqui
                    </div>
                    
                    <div className="flex justify-center items-center">
                    <hr className="w-[90%]"/>
                    </div>
                    
                    <div className="text-2xl font-medium">Titulo</div>
                    <div className="p-3 flex flex-col justify-center items-center">
                        <p>Descrição... Ler tudo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}