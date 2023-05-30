export default function Depoimentos() {
    return(
    <div className="w-[100%] bg-slate-100 p-4 shadow-xl">
    <h1 className="pb-4 text-3xl font-bold text-green-700">Depoimentos de Sucesso:</h1>
    <div>
        <div className="bg-blue-400 w-[280px] h-[340px] p-3 rounded-xl text-white">
            <div className="flex flex-row items-center ">
                <div className="w-[65px] h-[65px] bg-slate-500 rounded-full p-2 flex justify-center items-center text-center">Foto Aqui</div>
                <div className="ml-2">
                    <h2 className="text-xl font-bold">Ana Silva</h2>
                    <h3 className="text-base">Advogada</h3>
                </div>
            </div>
            <div className="p-2 flex justify-center items-center">
                <p>A oportunidade proporcionada pela bolsa de estudo do programa <b>Mais Solidário</b> foi o ponto de virada na minha vida, permitindo-me ingressar em uma faculdade e transformar minha realidade. Hoje, sou uma graduada em Direito pela Universo, atuando com sucesso na área há mais de 4 anos.</p>
            </div>
        </div>
    </div>
    </div>
    )
}