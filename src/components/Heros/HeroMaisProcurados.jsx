import { useState } from "react"
import {PrincipaisCursosPresenciais} from "../../data/PrincipaisCursosPresenciais"
import {PrincipaisCursosEad} from "../../data/PrincipaisCursosEad"
import MaisProcurado from "./MaisProcurado"
export default function MaisProcurados() {
let [painel, setPainel] = useState(false)
function alternarPainel(alternar) {
    setPainel(alternar)
}
    return(
    <div className={`w-[100%] bg-green-400 py-4 px-6 text-center flex flex-col justify-center items-center`}>
            <h1 className="text-3xl font-bold text-blue-800">Em dúvida sobre qual curso fazer?</h1>
        
        
		<div className="w-[100%]">
            <div className="w-[100%] bg-slate-100 rounded-xl my-3 shadow-md py-4 px-10 flex flex-col justify-center items-center">
            <div className="flex flex-row items-center justify-center border p-0 border-blue-700 rounded-full">
                
                <button className={`
                hover:bg-blue-600 hover:text-white active:bg-blue-700 
                rounded-3xl p-2 text-2xl font-medium text-blue-600 
                ${painel ? '' : 'bg-blue-700 text-white'}
                m-1
                `}
                onClick={() => alternarPainel(false)}
                >
                    Presenciais
                </button>
                <button className={`
                hover:bg-blue-600 hover:text-white active:bg-blue-700 
                rounded-3xl p-2 m-1 text-2xl font-medium text-blue-600 
                whitespace-nowrap
                ${painel ? 'bg-blue-700 text-white' : ''}
                
                `}
                onClick={() => alternarPainel(true)}
                >
                    A distância
                </button>
            </div>
        <div className={`flex gap-3 flex-wrap justify-center items-center mt-2`}>
            {/* Presencial */}
            <div className={`${painel ? 'hidden' : 'flex'} flex gap-3 flex-wrap justify-center items-center mt-2`}>
                {PrincipaisCursosPresenciais.map((curso) => {
                    return(
                        <MaisProcurado key={curso.id} url={curso.url} nome={curso.nomeDoCurso} precoCheio={curso.precoCheio} porcentagemDesconto={curso.porcentagemDesconto} valorComDesconto={curso.valorComDesconto} salarioMedio={curso.salarioMedio}/>
                    )
                })}
            </div>
            {/* Fim Presencial */}

            {/* EAD */}
        <div className={`gap-3 flex-wrap justify-center items-center mt-2  ${painel ? 'flex' : 'hidden'} `}>
                {PrincipaisCursosEad.map((curso) => {
                    return(
                        <MaisProcurado key={curso.id} url={curso.url} nome={curso.nomeDoCurso} precoCheio={curso.precoCheio} porcentagemDesconto={curso.porcentagemDesconto} valorComDesconto={curso.valorComDesconto} salarioMedio={curso.salarioMedio}/>
                    )
                })}
        </div>
            {/* Fim EAD */}
        </div>
    </div>
        </div>
    </div>
    )
}